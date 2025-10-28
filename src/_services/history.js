import { API } from "../_api";

export const getUserTransactions = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await API.get(`/transactions/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const transactionData = data.data;
    const transactions = transactionData ? [transactionData] : [];

    return { success: true, data: transactions };
  } catch (error) {
    console.error("Gagal memuat transaksi:", error.response || error);
    return { success: false, data: [] };
  }
};
