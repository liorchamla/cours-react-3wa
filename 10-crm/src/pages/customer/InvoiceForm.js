import { useState } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

const InvoiceForm = ({ onClose, onSubmit, invoice }) => {
  const [data, setData] = useState({
    amount: invoice?.amount ?? "",
    date: invoice?.date ?? "",
    id: invoice?.id ?? null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(data);

    setData({
      amount: "",
      date: "",
      id: null,
    });
  };

  return (
    <tr>
      <td>{invoice?.id ?? null}</td>
      <td>
        <input
          type="number"
          name="amount"
          className="form-control"
          placeholder="Montant ..."
          value={data.amount}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="date"
          name="date"
          placeholder="Date ..."
          className="form-control"
          value={data.date}
          onChange={handleChange}
        />
      </td>
      <td>
        <button className="btn btn-sm btn-success" onClick={handleSubmit}>
          <FaSave />
        </button>
        <button className="btn btn-sm btn-danger ms-1" onClick={onClose}>
          <FaTimes />
        </button>
      </td>
    </tr>
  );
};

export default InvoiceForm;
