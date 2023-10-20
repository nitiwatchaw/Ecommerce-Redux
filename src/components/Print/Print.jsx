import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalsPrint, clearCardPrint } from '../../feature/printSlice'
import './Print.scss'

export const Datetime = () => {
    const showdate = new Date()
    const displaytoday = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear()

    return (
        displaytoday
    )
}


const Print = () => {

    const Print = useSelector((state) => state.print)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTotalsPrint())
    }, [Print.dispatch])


    const fomaSubtotaltNum = (Math.round(Print.cartPrintTotalAmount * 100) / 100).toFixed(2);





    return (
        <div className="printSection">
            <div className='container-print'>
                <table className='print-table'>
                    <thead>
                        <tr>
                            <th>
                                Items
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Total Price
                            </th>
                        </tr>

                    </thead>
                    <tbody >
                        {Print.cartPrint?.map((print, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {print.title}
                                    </td>
                                    <td>
                                        {print.category}
                                    </td>
                                    <td>
                                        {print.printItemQuantity}
                                    </td>
                                    <td>
                                        £ {print.price}
                                    </td>
                                    <td>
                                        £ {(Math.round((print.price * print.printItemQuantity) * 100) / 100).toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })}



                    </tbody>
                </table>
                <div className="wrap-total">
                    <div className="wrap-text">
                        <p>Total Quantity</p>
                        <p>{Print.cartPrintTotalQuantity} Item</p>
                    </div>
                    <div className="wrap-text">
                        <p>SubTotal</p>
                        <p>{` £ ${fomaSubtotaltNum}`}</p>
                    </div>
                    <div className="wrap-text date">
                        <p>Date </p>
                        <Datetime />
                    </div>


                </div>

                <div className="wrap-button ">
                    <Link to="/" className='noPrint'>
                        <button onClick={() => { dispatch(clearCardPrint()) }}>Close</button>
                    </Link>
                    <button className='noPrint' onClick={() => { window.print() }}>Print</button>
                </div>

            </div>
        </div>
    )


}
export default Print