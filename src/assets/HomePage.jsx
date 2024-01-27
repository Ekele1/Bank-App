import "./homepage.css"
import { BsBank } from "react-icons/bs";
import { RiBankCardFill } from "react-icons/ri";
import { MdOutlinePayments, MdOutlineSettings } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineOtherHouses } from "react-icons/md";


import { useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearch, IoNotificationsOutline, IoCalendarClearOutline } from "react-icons/io5";
import { RiMastercardFill, RiFolderReceivedLine, RiFolderTransferLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { GrUserAdmin } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";



const HomePage = () => {
    const navigate = useNavigate()
    const [accountNumber, setAccountNumber] = useState()
    const [amount, setAmount] = useState()
    const [myCard, setMyCard] = useState(false)
    const [payments, setPayments] = useState(false)
    const [deposits, setDeposits] = useState(false)
    const [services, setServices] = useState(false)
    const [insurance, setInsurance] = useState(false)
    const [transfer, setTransfer] = useState(false)

    const handleMyCard = () => {
        setMyCard(true)
        setPayments(false)
        setDeposits(false)
        setServices(false)
        setInsurance(false)

    }
    const handlePayment = () => {
        setMyCard(false)
        setPayments(true)
        setDeposits(false)
        setServices(false)
        setInsurance(false)

    }
    const handleDeposit = () => {
        setMyCard(false)
        setPayments(false)
        setDeposits(true)
        setServices(false)
        setInsurance(false)

    }
    const handleServices = () => {
        setMyCard(false)
        setPayments(false)
        setDeposits(false)
        setServices(true)
        setInsurance(false)

    }
    const handleinsurance = () => {
        setMyCard(false)
        setPayments(false)
        setDeposits(false)
        setServices(false)
        setInsurance(true)

    }

    const allUser = JSON.parse(localStorage.getItem("allAcountUsers"))
    const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"))

    const HandleTransfer = () => {
        const currentData = allUser.map((e) => {
            if (e.accountNumber === loggedinUser.accountNumber) {
                // console.log("good")
                let newAmount = e.wallet - parseInt(amount)
                e.wallet = newAmount
                return e
            }
            if (accountNumber === e.accountNumber) {
                let newAmount = e.wallet + parseInt(amount)
                e.wallet = newAmount
                return e
            }
            return e
        })

        let newAmount = loggedinUser.wallet - parseInt(amount)
        loggedinUser.wallet = newAmount
        localStorage.setItem("allAcountUsers", JSON.stringify(currentData))
        localStorage.setItem("loggedinUser", JSON.stringify(loggedinUser))
        setTransfer(false)
    }

    const handleLogOut =()=>{
        localStorage.removeItem("loggedinUser")
        navigate("/login")
    }

    return (
        <div className="homePageWrapper">
            <div className="homePage">
                <div className="left">
                    <div className="logo">
                        <BsBank className="bankLogo" />
                        <h1>SMART BANK</h1>
                    </div>
                    <div className='featureWrap'>
                        <div className={`mycard ${myCard ? "mycardtrue" : null}`} onClick={handleMyCard}>
                            <RiBankCardFill className="bankLogo" />
                            <h3>MY CARDS</h3>
                        </div>
                        <div className={`mycard ${payments ? "mycardtrue" : null}`} onClick={handlePayment}>
                            <MdOutlinePayments className="bankLogo" />
                            <h3>PAYMENTS</h3>
                        </div>
                        <div className={`mycard ${deposits ? "mycardtrue" : null}`} onClick={handleDeposit}>
                            <TbCurrencyNaira className="bankLogo" />
                            <h3>DEPOSITS</h3>
                        </div>
                        <div className={`mycard ${insurance ? "mycardtrue" : null}`} onClick={() => {
                            handleinsurance()
                            navigate("/admin")
                        }}>
                            <GrUserAdmin className="bankLogo" />
                            <h3>DASH BOARD</h3>
                        </div>
                        <div className={`mycard ${services ? "mycardtrue" : null}`} onClick={handleLogOut}>
                            <TbLogout2 className="bankLogo" />
                            <h3>LOG OUT</h3>
                        </div>
                    </div>

                </div>
                <div className="right">
                    {
                        transfer ? <div className="transferpop">
                            <div className="transfermoney">
                                <div className="createh1"><h1>Create Payment</h1></div>
                                <div className="receiver">
                                    <h3>To</h3>
                                    <div className="xrp">
                                        <p>Account Number</p>
                                        <input type="number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="account number" />
                                    </div>
                                    <div className="xrp">
                                        <p>Amount</p>
                                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="amount" />
                                    </div>
                                    <button className="sendmoneybutton" onClick={() => {
                                        HandleTransfer()
                                    }}>Send</button>
                                </div>
                            </div>
                            <div className="cancel">
                                <ImCancelCircle onClick={() => setTransfer(false)} />
                            </div>
                        </div> : null
                    }
                    <div className="cardWrapper">
                        <div className="cardHolder">
                            <div className="card">
                                <div className="balance">
                                    <p className="current">Current Balance</p>
                                    <RiMastercardFill className="mastercard" />
                                </div>
                                <div className="amount">
                                    <TbCurrencyNaira className="bankLogo" />

                                    <h1>
                                        {
                                            loggedinUser.wallet 
                                        }
                                        </h1>
                                </div>
                                <div className="cardnumber">
                                    <p>5282345678901289</p>
                                    <p>09/28</p>
                                </div>
                            </div>
                            <div className="cardAction">
                                <div className="action">
                                    <div className="actualpic">
                                        <RiFolderReceivedLine />
                                    </div>
                                    <h3>Fund Card</h3>
                                </div>
                                <div className="action goo">
                                    <div className="actualpic"></div>
                                    <h3>Limit</h3>
                                </div>
                                <div className="action">
                                    <div className="actualpic" onClick={() => setTransfer(true)}>
                                        <RiFolderTransferLine />
                                    </div>
                                    <h3>Transfer</h3>
                                </div>
                                <div className="action lee">
                                    <div className="actualpic">
                                        <MdOutlineOtherHouses />
                                    </div>
                                    <h3>Others</h3>
                                </div>
                            </div>
                            <div className="cardinfo">
                                <div className="information">
                                    <h2>Card info</h2>
                                </div>
                                <div className="information">
                                    <p>Status</p>
                                    <i>Active</i>
                                </div>
                                <div className="information">
                                    <p>Card number</p>
                                    <i>5282345678901289</i>
                                </div>
                                <div className="information">
                                    <p>CVV</p>
                                    <i>CVV</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transactionInfo">
                        <div className="notification">
                            <IoSearch className="icons" />
                            <IoNotificationsOutline className="icons" />
                            <MdOutlineSettings className="icons" />
                            <h1>{loggedinUser?.firstName}</h1>
                        </div>
                        <div className="notificationDetails">
                            <div className="activity">
                                <h2>Recent Activity</h2>
                                <div className="activityIcon">
                                    <div>
                                        <BiSolidCategoryAlt />
                                        <p>Categories</p>
                                    </div>
                                    <div id="real">
                                        <IoCalendarClearOutline />
                                        <p>Date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="alertcred">
                                <h2>Ekele Jeremiah</h2>
                                <h2>+20,000</h2>
                            </div>
                            <div className="alertcred">
                                <h2>Francis Eze</h2>
                                <h2> -30,000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage