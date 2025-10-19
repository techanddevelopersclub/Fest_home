import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Report = () => {
    const { user } = useContext(AuthContext);
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        // Mock payment data for frontend display
        const mockPayments = [
            {
                id: "demo-1",
                userName: "Demo User 1",
                mobileNumber: "01712345678",
                transactionId: "TXN123456",
                amount: "$50",
                eventId: "1"
            },
            {
                id: "demo-2",
                userName: "Demo User 2",
                mobileNumber: "01787654321",
                transactionId: "TXN789012",
                amount: "$75",
                eventId: "2"
            },
            {
                id: "demo-3",
                userName: "Demo User 3",
                mobileNumber: "01811223344",
                transactionId: "TXN345678",
                amount: "$100",
                eventId: "3"
            }
        ];

        // Simulate API call delay
        setTimeout(() => {
            setPaymentData(mockPayments);
        }, 1000);
    }, []);

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>#</label>
                            </th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>TransactionId</th>
                            <th>Amount</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData?.map((payment, i) => (
                            <tr key={i}>
                                <th>
                                    <label>{i + 1}</label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{payment?.userName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{payment?.mobileNumber}</td>
                                <td>{payment?.transactionId}</td>
                                <td>{payment?.amount}</td>
                                <th>
                                    <Link to={`/event/${payment?.eventId}`}>
                                        <button className="btn btn-xs mb-2">Details Event</button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;