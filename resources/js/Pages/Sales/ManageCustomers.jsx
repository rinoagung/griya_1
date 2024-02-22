import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Customer({ auth, customers, success }) {
    const { data, setData, post, errors, processing } = useForm({
        id: "",
    });

    const deleteCustomer = (e, id) => {
        // return alert(data.id);
        router.delete(`/customer/${id}`);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Manage Pelanggan
                </h2>
            }
        >
            <Head title="Customer" />
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="table-responsive col-lg-11">
                        {success && (
                            <div
                                className="alert alert-success alert-dismissible m-auto fade show col-lg-7"
                                role="alert"
                            >
                                {success}
                            </div>
                        )}
                        <table className="table table-striped table-sm mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">No telepon</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((c, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{c.nama}</td>
                                        <td>+{c.no_telp}</td>
                                        <td>
                                            <a
                                                href={`/customer/${c.id}`}
                                                className="badge bg-transparent shadow-sm"
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    fill="#1e90ff"
                                                    className="bi bi-eye"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                </svg>
                                            </a>
                                            <a
                                                href={`/customer/${c.id}/edit`}
                                                className="badge bg-transparent shadow-sm"
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    fill="deeppink"
                                                    className="bi bi-pencil-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg>
                                            </a>
                                            <button
                                                className="badge bg-transparent border-0 shadow-sm d-inline"
                                                onClick={(e) => {
                                                    if (
                                                        window.confirm(
                                                            "Anda yakin ingin menghapus data ini?"
                                                        )
                                                    ) {
                                                        deleteCustomer(e, c.id);
                                                    }
                                                }}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    fill="red"
                                                    className="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link href="/dashboard" className="text-underline">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
