import React, { useEffect, useState } from 'react'
import Navbar from '../../components/ui-elements/nav-bar/navbar'
import { useRecoilValue, } from 'recoil'
import { categoriesState } from '../../recoil/atoms/home'
import FilteredCategories from '../../components/catagories/filteredCategories'
import MyCheckbox from '../../components/inputs/myCheckBox'
import CommonService from '../../services/commonService'

const index = () => {
    // const [checked, setChecked] = useState(false)
    const [brands, setBrands] = useState([])
    const items = [
        { id: 1, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Apple 12 pro", brand: "apple", },
        { id: 2, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro", brand: "redmi", },
        { id: 3, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Realme 12 pro", brand: "realme", },
        { id: 4, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "One Plus Nord Ce3", brand: "oneplus", },

        { id: 5, category: "laptop", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "One Plus Nord Ce3", brand: "something", },
        { id: 6, category: "laptop", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "One Plus Nord Ce3", brand: "something", },
        { id: 7, category: "gorcery", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "One Plus Nord Ce3", brand: "something", },

    ]

    const [filteredItems, setFilteredItems] = useState([])
    const [finalItems, setFinalItems] = useState([])
    const categoryValue = useRecoilValue(categoriesState)

    useEffect(() => {
        if (categoryValue) {
            let newItms = items.filter(item => item.category === categoryValue)
            setFilteredItems(newItms)
            setFinalItems(newItms)
        }
    }, [categoryValue])

    console.log({ filteredItems });
    console.log({ finalItems });

    useEffect(() => {
        const uniqueBrands = []
        filteredItems?.map(item => {
            uniqueBrands.push({ brand: item.brand, checked: false })
        })
        setBrands([...new Set(uniqueBrands)])
    }, [filteredItems])

    const handleFilterBrands = (item, e) => {
        let newBrands = brands?.map(brand => {
            if (brand.brand == item.brand) {
                return { ...brand, checked: !brand.checked }
            } else {
                return brand
            }
        })

        console.log({ newBrands });
        setBrands(newBrands)
        // console.log({ brands });
        // setBrands(newBrands)
        // console.log({ brands });
        // setFinalItems(newArr)


        // console.log({ brands });
        // console.log({ brands });
        // // setBrands(newBrands)
        // let newBrands = []
        // // let newItem = ({ ...item, checked: e.target.checked })
        // newBrands.push(newItem)
        // console.log({ newBrands });
        // let newArr = [];
        // if (item.checked) {
        //     filteredItems.filter(item => {
        //         newBrands.map(brand => {
        //             if (!checkedBrands.includes(e.target.value)) {
        //                 if (brand === item.brand) {
        //                     newArr.push(item)
        //                 }
        //             }
        //         })
        //     });
        // }
        // console.log(e.target.value);
        // let newBrands = CommonService.copyObject(checkedBrands);


        // if (e.target.checked) {
        //     if (checkedBrands.includes(e.target.value)) {
        //         let newBrand = checkedBrands.filter(brand => brand != brand)
        //         setCheckedBrands(newBrand)
        //         return
        //     }
        //     newBrands.push(e.target.value)
        //     setCheckedBrands(newBrands)
        // }


        // // return;

        // // let newArr = [];
        // // filteredItems.map(item => item.brand == e.target.value ? { ...item, checked: e.target.checked } : { ...item, checked: false })
        // // console.log({ newArr });

        // let newArr = [];

        // filteredItems.filter(item => {
        //     newBrands.map(brand => {
        //         if (!checkedBrands.includes(e.target.value)) {
        //             if (brand === item.brand) {
        //                 newArr.push(item)
        //             }
        //         }
        //     })
        // });
        // console.log({ newArr })
        // setFinalItems(newArr)
        // console.log({ filteredItems });
        // setChecked(!checked)
        // setFilteredBrands(filteredItems.filter(item => item.brand == e.target.value));
    }

    // console.log({ selectedItem });


    useEffect(() => {


        if (brands) {
            let newArr = []
            brands?.map(brand => {
                if (brand.checked) {
                    filteredItems.filter(item => {
                        if (item.brand == brand.brand) {
                            newArr.push(item)
                        }
                    })
                }
            })
            // console.log({ newArr });


            if (newArr.length > 0) {
                setFinalItems(newArr)
            }

        }
    }, [brands])


    // console.log({ finalItems });

    // useEffect(() => {
    //     if (filteredItems == null) {
    //         setFinalItems(filterdBrands)
    //     } else {
    //         console.log("else part");
    //         setFinalItems(filteredItems)
    //     }
    // }, [filterdBrands])

    // console.log({ finalItems });

    // console.log({ filterdBrands });

    // console.log({ checked });

    return (
        <div className='catagory_page_wrapper'>
            <Navbar />
            <div className="catagory_container">
                <div className="left_side">
                    <div className="heading">Category</div>
                    {brands?.map(brand => {
                        // console.log({ selectedItem, brand });
                        return (
                            <MyCheckbox
                                label={brand.brand}
                                handleChange={(event) => handleFilterBrands(brand, event)}
                                defaultChecked={brand.checked}
                                value={brand.brand} />
                        )
                    })}
                </div>
                <div className="right_side">
                    {finalItems?.map(item => <FilteredCategories item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default index
