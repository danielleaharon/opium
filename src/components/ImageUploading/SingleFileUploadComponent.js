import React, { Component } from 'react';
import './imageUploading.css';
import getFirebase from "../../Firebase";
import {resizeImage} from "./resizeImage";
import loadImage from "blueimp-load-image";

export default class SingleFileUploadComponent extends Component {

    constructor(props) {
        
        super(props)

        this.state = {
            file: null,
            url:null,
        }
        this.fileUpload = this.fileUpload.bind(this)
        this.uploadImage = this.uploadImage.bind(this)
        this.removeBackgrounnd = this.removeBackgrounnd.bind(this)

    }
     firebase = getFirebase();

    fileUpload(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

     async removeBackgrounnd(image){
        const resizedImage = await loadImage(image, {
             // resize before sending to Remove.bg for performance
             maxWidth: 1500,
             maxHeight: 1500,
             canvas: true,
         });
        //  var blob = null;
         return new Promise((resolve) => {

         resizedImage.image.toBlob(async function (inputBlob) {

             const formData = new FormData();
             formData.append("image_file", inputBlob);

             return fetch("https://api.remove.bg/v1.0/removebg", {
                 method: "POST",
                 headers: {
                     "X-Api-Key": "Ssmd81jGzdntmTVNs1MP3ujn",
                 },
                 body: formData,
             }).then(async (response) => {


                 const outputBlob = await response.blob();
                 // const outputBlob2 = await response.png();
                 // console.log(outputBlob2)
                //  blob = outputBlob;
                //  console.log('outputBlob');
                //  console.log(outputBlob);
                //  blob = URL.createObjectURL(outputBlob);
                 resolve( outputBlob);
             });
         })
        });
    }
    async uploadImage(event) {
        event.preventDefault()
        if (!this.firebase) return;

        const uploadedFile = event.target.files[0];
        if (!uploadedFile) return;

        resizeImage(uploadedFile).then( async(uploadedFile3)=>{
            console.log(uploadedFile3)
           await  this.removeBackgrounnd(uploadedFile3).then(async(uploadedFile2)=>{

        
        // const uploadedFile2=await this.removeBackgrounnd(uploadedFile3);

        console.log(uploadedFile2)

        const uploadedFileName=uploadedFile.name.split('.')[0]+'.png'

        const storage = this.firebase.storage();
        const ref=this.props.category.trim();
        const storageRef = storage.ref(ref);
    var metadata = {
        contentType: uploadedFile3.type,
      };
        try {
          const r= await storageRef.child(uploadedFileName).put(uploadedFile2,metadata);

          r.ref.getDownloadURL().then((url)=>{
            this.props.setImage(url)
            this.setState({url:url})

         });

        //   alert("Successfully uploaded picture!");
        } catch (error) {
          console.log("error", error);
        }
    });

});
    }

    render() {
        let preview;
        if (this.props.url) {
            
            preview = <img id="imageResult" className='preview' src={this.props.url} alt='' />;
        }
        return (
            <form className='image-form'>
                

                <div id='image-table' className="form-group mb-3">
                    <input type="file" id='input-img' onChange={this.uploadImage}  accept={'image/*'}className="form-control" />
                </div>
                {/* <button type="button" onClick={this.uploadImage} className="btn btn-danger">Upload Single File</button> */}
                <div className="form-group">
                    {preview}
                </div>
            </form >
        )
    }
}