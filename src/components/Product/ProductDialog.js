import React from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@material-ui/lab/Autocomplete';


export default function ProductDialog(props) {
    const [showSchoolLogo, setShowSchoolLogo] = React.useState(false)
    const [state, setState] = React.useState(props.state);
    const [imgItems, setImgItems] = React.useState(props.item.productImage[0]);

    const [imgItem, setImgItem] = React.useState(props.item.productImage[0].front);
    const [sizeSelectMsg, setSizeSelectMsg] = React.useState(false);
    const [sizeSelect, setSizeSelect] = React.useState('');
    const [selectCity, setSelectCity] = React.useState(null);
    const [selectSchool, setSelectSchool] = React.useState(null);
    const [schoolLogoListFilter, setSchoolLogoListFilter] = React.useState([]);
    const [CityFilter, setCityFilter] = React.useState([]);
    const [itemSide, setItemSide] = React.useState('front');

    //   this.state = {

    //     price: null,


    //     imgFront: this.props.item.productImage[0].front,
    //     item: this.props.item.productImage[0],
    //     itemSide: 'front',
    //     hasBack: true,
    //     inCart: false,
    //     addCartmsg: false,
    //     deleteCartmsg: false,
    //     sizeSelect: '',
    //     sizeSelectMsg: false,
    //     schoolLogo: false,
    //     schoolLogoList: [],
    //     CityFilter: [],
    //     selectCity: null,
    //     selectSchool: null,
    //     schoolLogoListFilter: []
    //   }
    const handelChangeColor = (item) => {
        setImgItems(item)
        setImgItem(item.front)


    }
    const addToCart = () => {
        if (sizeSelect === '') {
            setSizeSelectMsg(true)
            return;
        }
        else {
            props.sendToCart(sizeSelect, imgItems)
        }
    }
    return (
        <Dialog maxWidth='lg' fullWidth id='product-dialog' open={true} onClose={props.handleCloseDialog}>
            <DialogContent id='product-dialog-DialogContent' >
                <div className='container'>
                    {/* <div className='mobile row' hidden={props.width > 800} >
                        <div >
                            <img className='product-dialog-details-img img-fluid' src={state.imgFront} alt='shirt' ></img>
                        </div>


                        {state.schoolLogo && <div className='Autocomplete-mobile'>  <Autocomplete
                            options={state.CityFilter}
                            getOptionLabel={option => option}
                            renderOption={option => <>{option} </>}
                            renderInput={params => {
                                params.id = 'school-label';

                                return <TextField
                                    // id='prodct-schoollogo-select'
                                    className='school-label'
                                    label="חפש לפי עיר"
                                    InputLabelProps={{ id: 'school-label' }}
                                    name="city"
                                    variant="standard"
                                    size='small'
                                    // fullWidth
                                    {...params}

                                />
                            }
                            }
                            id='prodct-schoollogo-select'
                            value={props.state.selectCity}
                            onChange={(event, value) => {
                                props.setState({ selectCity: value });
                                const arr = props.state.schoolLogoList.filter((a) => a.city === value || value === '' || value === null);
                                props.setState({ schoolLogoListFilter: arr })
                            }}
                        />

                            <Autocomplete
                                options={props.state.schoolLogoListFilter}
                                getOptionLabel={option => option.school + ' | ' + option.city}
                                renderOption={option => <>{option.school} | {option.city} </>}
                                renderInput={params => {
                                    params.id = 'school-label';
                                    return <TextField
                                        // id='prodct-schoollogo-select'
                                        InputLabelProps={{ id: 'school-label' }}
                                        label="בתי ספר"
                                        name="school"
                                        variant="standard"
                                        size='small'
                                        // fullWidth
                                        {...params}
                                    />
                                }}
                                id='prodct-schoollogo-select'
                                value={props.state.selectSchool}
                                onChange={(event, value) => {
                                    props.setState({ selectSchool: value })
                                }}
                            />

                        </div>}
                        <div className='dialog-imgs-select'>
                            <img className={props.state.itemSide === 'front' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} onClick={() => { this.setState({ imgFront: props.state.item.front }); this.setState({ itemSide: 'front' }) }} src={props.state.item.front} alt='front' ></img>
                            <img hidden={!props.state.hasBack} onClick={() => { props.setState({ imgFront: props.state.item.back }); props.setState({ itemSide: 'back' }) }} className={props.state.itemSide === 'back' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} src={props.state.item.back} alt='back' ></img>

                        </div> */}
                    {/* </div> */}
                    <div className='row' hidden={props.width <= 800}>
                        <div className='dialog-imgs-select col-2'>
                            <img className={itemSide === 'front' ? 'product-dialog-details-imgs select img-fluid' : 'product-dialog-details-imgs img-fluid'} onClick={() => { setImgItem(imgItems.front); setItemSide('front'); }} src={imgItems.front} alt='front' ></img>
                            <img hidden={!props.state.hasBack} onClick={() => { setImgItem(imgItems.back); setItemSide('back'); }} className={itemSide === 'back' ? 'product-dialog-details-imgs select img-fluid' : 'product-dialog-details-imgs img-fluid'} src={imgItems.back} alt='back' ></img>

                        </div>
                        <div className='col-7 d-flex justify-content-center'>
                            <img className='img-fluid ' src={imgItem} alt={itemSide} ></img>
                        </div>
                        <div className='product-dialog-details-txt d-flex flex-column col-3 pt-5 pr-5 text-right'>
                            <p id='product-dialog-details-txt-title'>{props.item.name}</p>
                            <p className='product-dialog-details-price'> ₪ {props.item.price}</p>
                            <div className='fs-13 text-center d-flex align-items-center'>
                                <span className='ml-4'>צבע  </span>
                                {props.item.productImage.map((item, index) => {
                                    return <span key={index} onClick={() => handelChangeColor(item)} className="dot-product-dialog" id={imgItems.color === item.color ? 'dot-product-select' : ''} style={{ backgroundColor: item.color }}></span>

                                })}
                            </div>
                            <div className='d-flex text-center align-items-center mt-4 '>
                                <span  >מידה</span>
                                <div className='product-dialog-size mr-4 '>
                                    {props.item.size.map((item, index) => {
                                        return <span key={index} className={sizeSelect === item ? 'sizeSelect ml-3' : 'ml-3'} onClick={() => { setSizeSelect(item); setSizeSelectMsg(false) }} >{item}</span>

                                    })}
                                    <span hidden={!sizeSelectMsg} className='product-dialog-size-msg'>חסרה מידה</span>
                                </div>

                            </div>
                            <div hidden={props.item.category.trim() !== 'הלבשה' || props.Ondesign} className="product-schoollogo mt-4">
                                <Checkbox className='pr-0 ' checked={showSchoolLogo} onChange={() => { setShowSchoolLogo(!showSchoolLogo) }} />
                                <span className='product-schoollogo-p'> סמל בית ספר </span>
                            </div>

                            {/* <div> */}
                            {showSchoolLogo && props.width > 800 && <div className='Autocomplete'>  <Autocomplete
                                options={props.state.CityFilter}
                                getOptionLabel={option => option}
                                renderOption={option => <>{option} </>}
                                renderInput={params =>
                                    <TextField
                                        // id='prodct-schoollogo-select'
                                        className='school-label'
                                        label="חפש לפי עיר"
                                        // InputLabelProps={{id:'school-label'}}
                                        name="city"
                                        variant="standard"
                                        size='small'
                                        // fullWidth
                                        {...params}
                                    />
                                }
                                id='prodct-schoollogo-select'
                                value={selectCity}
                                onChange={(event, value) => {
                                    setSelectCity(value)
                                    const arr = props.state.schoolLogoList.filter((a) => a.city === value || value === '' || value === null);
                                    setSchoolLogoListFilter(arr)
                                }}
                            />

                                <Autocomplete
                                    options={schoolLogoListFilter}
                                    getOptionLabel={option => option.school + ' | ' + option.city}
                                    renderOption={option => <>{option.school} | {option.city} </>}
                                    renderInput={params => {
                                        params.id = 'school-label';
                                        return <TextField
                                            // id='prodct-schoollogo-select'
                                            id='school-label'
                                            // InputLabelProps={{id:'school-label'}}
                                            label="בתי ספר"
                                            name="school"
                                            variant="standard"
                                            size='small'
                                            // fullWidth
                                            {...params}
                                        />
                                    }}
                                    id='prodct-schoollogo-select'
                                    value={selectSchool}
                                    onChange={(event, value) => {
                                        setSelectSchool(value)
                                    }}

                                />

                            </div>}
                            {selectSchool !== null && selectSchool !== undefined && showSchoolLogo && <img className='school-logo img-fluid' src={selectSchool.url} alt='school' />}
                            <button id='product-dialog-addCart' onClick={addToCart}>{props.Ondesign ? 'בחר מוצר' : 'הוסף לסל'}</button>


                        </div>
                    </div>

                    {/* <button id='product-dialog-addCart' onClick={props.addToCart}>{props.Ondesign ? 'בחר מוצר' : 'הוסף לסל'}</button> */}

                    {/* <DialogActions> */}
                    <button id='product-dialog-cancel' onClick={props.handleCloseDialog}><span className="iconify" data-icon="iconoir:cancel"></span></button>
                    {/* </DialogActions> */}
                </div>
            </DialogContent>

        </Dialog>




    );

}
