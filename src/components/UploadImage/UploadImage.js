import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import exifr from 'exifr';
import './UploadImage.module.css';


class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            cropImage: null,
            file: null,
            crop: null,
            errorMessage: null,
            sentToServer: false,
            readingImage: false,
            orientation:''

        };

        this.onImageSelected = this.onImageSelected.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.resetOrientation = this.resetOrientation.bind(this);

        this.fileInput = React.createRef();

        this.orientationValues = {
            "Rotate 90 CW": 6,
            "Rotate 180 CW": 3,
            "Rotate 270 CW": 8,
        }
    }

    render() {
        let resizeRatio = this.getEffectiveResizeRatio();
        let resizedCrop = this.adjustCropBasedOnResizeRatio(this.state.crop, resizeRatio);
        return (
            <div id={"upload-wrapper"}>
                <div id={"upload-content-wrapper"} className={'flex-center'}>
                    <label >
                        <input type={'file'}
                               accept={'image/*'}
                               ref={this.fileInput}
                               id={"upload-file-input"}
                               onChange={this.onImageSelected} />
                    </label>
                </div>
                <div id={"upload-crop-wrapper"} 
                     style={{width: this.getCropperWidth() + 'px'}}>
                    <ReactCrop src={this.state.image}
                               crop={resizedCrop}
                               onImageLoaded={(image) => this.onImageLoaded(image)}
                               onChange={(crop) => this.onCropChange(crop)}
                    />
                </div>
                { this.getErrorMessage() }
                <div id={"upload-buttons-wrapper"}>
                    <div className={"upload-button-wrapper"}>
                        <button 
                                onClick={this.onUpload}>העלאה</button>
                    </div>
                    <img style={{width:'100%'}} src={this.state.cropImage}></img>

                </div>
            </div>
        );
    }

    onImageLoaded(image) {
        this.setState({cropImage: image, crop: this.createInitialCrop(image)});
    }

    createInitialCrop(image) {
        let crop = {
            unit: 'px',
            aspect: 1,
            minWidth: 100,
            minHeight: 100,
        };
        console.log(image.naturalWidth +'nato')
        console.log(image.naturalHeight +'nato')

        crop.width = Math.min(image.naturalWidth, image.naturalHeight);
        crop.height = crop.width;
        if (image.naturalWidth > image.naturalHeight) {
            crop.y = 0;
            crop.x = (image.naturalWidth / 2) - (crop.width / 2);
        } else {
            crop.x = 0;
            crop.y = (image.naturalHeight / 2) - (crop.height / 2);
        }
        return crop;
    }

    getCropperWidth() {
        if (this.state.cropImage===null) {
            return 0;
        }
        let maxWidth = 500;
        let maxHeight = 600;
        let cropperWidth = maxWidth;

        let image = this.state.cropImage;
        let resizeRatioForMaxHeight = maxHeight / image.naturalHeight;
        let widthBasedOnMaxHeight = image.naturalWidth * resizeRatioForMaxHeight;
        cropperWidth = Math.min(cropperWidth, widthBasedOnMaxHeight);
        cropperWidth = Math.min(cropperWidth, image.naturalWidth);
        cropperWidth = Math.min(cropperWidth, this.props.screenWidth - 60);
        console.log(widthBasedOnMaxHeight)
        console.log(cropperWidth)
        return cropperWidth;
    }

    getEffectiveResizeRatio() {
        if (this.state.cropImage===null) {
            return;
        }

        let effectiveResizeRatio = this.getCropperWidth() / this.state.cropImage.naturalWidth;
        return effectiveResizeRatio;
    }

    adjustCropBasedOnResizeRatio(crop, resizeRatio) {
        let adjustedCrop = Object.assign({}, crop);
        adjustedCrop.x = Math.round(adjustedCrop.x * resizeRatio);
        adjustedCrop.y = Math.round(adjustedCrop.y * resizeRatio);
        adjustedCrop.width = Math.round(adjustedCrop.width * resizeRatio);
        adjustedCrop.height = Math.round(adjustedCrop.height * resizeRatio);
        return adjustedCrop;
    }

    onCropChange(crop) {
        let adjustedCrop = this.adjustCropBasedOnResizeRatio(crop, 1 / this.getEffectiveResizeRatio());
        if (crop.width >= 100 && !this.cropsAreEqual(adjustedCrop, this.state.crop)) {
            this.setState({crop: adjustedCrop});
        }
        console.log(adjustedCrop)
    }

    onImageSelected() {
        const file = this.fileInput.current.files[0];
        if (!file) {
            return;
        }
        this.setState({file: file, readingImage: true});
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            exifr.parse(reader.result)
                .then(exifData => this.resetOrientation(reader.result, exifData))
                .catch(e => console.log(e));
        });
        reader.readAsDataURL(file);
    }

    onUpload() {
        if (this.state.file === null) {
            this.setState({errorMessage: 'errorNoFileSelected', sentToServer: false});
            return;
        }
        if (this.state.crop.width < 100 || this.state.crop.height < 100) {
            this.setState({errorMessage: 'errorCropArea', sentToServer: false});
            return;
        }
        this.setState({errorMessage: null, sentToServer: true});
        this.sendCroppedImage();
    }

    getErrorMessage() {
        let labelKey;
        if (this.state.errorMessage != null) {
            labelKey = this.state.errorMessage;
        } else if (this.props.errorMessage != null && this.state.sentToServer) {
            labelKey = this.props.errorMessage;
        } else {
            return;
        }
        return (
            <div id={"upload-error-message-wrapper"}>
                { "uploadImageInput"}
            </div>
        );
    }

    cropsAreEqual(crop1, crop2) {
        return crop1.x === crop2.x &&
            crop1.y === crop2.y &&
            crop1.width === crop2.height &&
            crop1.width === crop2.height;
    }

    resetOrientation(srcBase64, exifData) {
        var img = new Image();
        let callback = image => this.setState({image: image, readingImage: false});
        let orientation = exifData ? this.orientationValues[exifData.Orientation] : 1;
        // let   orientation=1;
        this.setState({orientation:orientation});
        img.onload = function() {
            var width = img.width,
                height = img.height,
                canvas = document.createElement('canvas'),
                ctx = canvas.getContext("2d");
 // canvas.width = height;
                // canvas.height = width;
            if (orientation > 4) {
                canvas.width = height;
                canvas.height = width;
            } else {
                canvas.width = width;
                canvas.height = height;
            }

            switch (orientation) {
                case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                case 3: ctx.transform(-1, 0, 0, -1, width, height ); break;
                case 4: ctx.transform(1, 0, 0, -1, 0, height ); break;
                case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                case 6: ctx.transform(0, 1, -1, 0, height , 0); break;
                case 7: ctx.transform(0, -1, -1, 0, height , width); break;
                case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                default: break;
            }
            ctx.drawImage(img, 0, 0);
            callback(canvas.toDataURL());
        };

        img.src = srcBase64;
    }
    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )
    
        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, 'cropped.jpg')
            }
        })
    }
    sendCroppedImage() {
        var img = new Image();
        let callback = file => this.props.onUpload(file);
        let crop = this.state.crop;

        img.onload = function() {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext("2d");

            let canvasSize = Math.min(600, crop.width);
            const scaleX = img.naturalWidth / img.width;
            const scaleY = img.naturalHeight / img.height;
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            ctx.drawImage(img,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                canvasSize,
                canvasSize);

            fetch(canvas.toDataURL())
                .then(res => res.blob())
                .then(blob => {
                    let file = new File([blob], 'fileName', { type: blob.type });
                    callback( file);
                });
        };

        img.src = this.state.image;
    }

}

export default UploadImage;
