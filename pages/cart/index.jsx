 
import React, { useEffect, useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from './Cart.module.scss';
import axios from 'axios';
import { API_URL } from '../../utils/api';

const Page = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [cartArr, setCartArr] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [token, setToken] = useState('')
    const [authorize, setAuthorize] = useState(null)

    
    const getAllCart = (localAcces) => {
        axios
        .get(`${API_URL}/api/v1/cart/view_cart/`, {
            headers: {
                Authorization: `Bearer ${localAcces}`,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (response.status === 200) {
                // throw new Error('Network response was not ok');
                console.log(response);
                const data = response.data;
                setCartArr(data)
                console.log(data, 'cart again');
                setAuthorize(true) 
            }
        })
        .catch((error) => {
            toast.error("Вы не зарегестрированы", {});
            console.error('Error fetching data:', error);
            setAuthorize(false)
        });
    }

    const deleteCartItem = async (id) => {
        try {
          const response = await axios.delete(`${API_URL}/api/v1/cart/remove_from_cart/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (response.status === 204) {
            console.log(`Deleted ${id}`);
            toast.success('вы успешно удалили товар из корзины')
            getAllCart(token);
          }
        } catch (error) {
          console.error('Error fetching cart delete:', error);
        }
      };
    const handleDelete = (id) => {
        setDeleteId(id)
        deleteCartItem(id)
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setInputSearch('');
    };
    let summary = 0
    cartArr?.forEach(elem =>{
        summary += +elem.product.price * elem.quantity
    })
    useEffect(() => {
        if (deleteId !== null) {
            getAllCart(token);
        }
    }, [deleteId]);

    useEffect(() => {
        const localAcces = sessionStorage.getItem('access_token')
        setToken(localAcces)
        getAllCart(localAcces);
    }, []);
    
    return (
        <main className={styles.cart}>
            <ToastContainer />

            <div className={styles.cartHeading}>
                <h1>Корзина</h1>
                <span>№ 1695-1984-38867</span>
            </div>
            <div className={styles.cartItems}>
                <div className={styles.cart_wrapper}>
                    <div className={styles.cart_wrapper__tabs}>
                        <p>Наименование</p>
                        <p>Цена</p>
                        <p>Кол-во</p>
                        <p>Стоимость</p>
                    </div>
                    <hr />
                    <div className={styles.products}>
                        {
                            cartArr?.length > 0 ? (
                                cartArr?.map(elem => (
                                <div className={styles.product_wrapper} key={elem.id}>
                                    <div className={styles.product_wrapper__name}>
                                        <img
                                            src={elem.product.image1}
                                            alt={elem.product.name}
                                        />
                                        <div className={styles.product_wrapper__name_info}>
                                            <div>Лучшая цена</div>
                                            <span>код: 17476254</span>
                                            <p>{elem.product.name} AEG BS18G4-202C 4935478630</p>
                                            <span>
                                                Можно забрать <b>сегодня</b>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.product_wrapper__price}>{elem.product.price} р</div>
                                    <div>{elem.quantity}</div>
                                    <div>{elem.product.price} р.</div>
                                    <div className={styles.userTools}>
                                        <AiOutlineHeart /> 
                                        <MdDeleteOutline onClick={() => handleDelete(elem.product.id)} />
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p>в корзине ничего нет</p>
                            )
                        }
                        
                    <div className={styles.auth}>
                        {authorize ? '' : <p className={styles.auth_message}>вы должны зарегестрироваться</p>}
                    </div>
                    </div>
                </div>
                <div className={styles.cartBill}>
                    <h2>Ваш заказ</h2>
                    <p>
                        Выбрано товаров: <span>{cartArr?.length}</span>
                    </p>
                    {/* <p>
                        Вес заказа: <span>1кг</span>
                    </p> */}
                    <p>
                        Общая стоимость: <span className={styles.bill}>{summary}</span>
                    </p>
                    <div className={styles.cartBill_promocode}>
                        <input type="text" name="" id="" placeholder="Введите промокод" />
                        <span title="введите промокод"> ? </span>
                    </div>
                    <hr />
                    <div className={styles.cartBill_btns}>
                        <button>Оформить заказ</button>
                        <button>Оформить без регистрации</button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Page;