import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Paket({ auth, paket, errors, success }) {
    const { data, setData, post, processing } = useForm({
        nama_paket: "",
        harga: "",
    });

    const deletePaket = (e, id) => {
        // return alert(data.id);
        router.delete(`/paket/${id}`);
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(`/paket`, data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Paket Penjualan
                </h2>
            }
        >
            <Head title="Paket" />
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5">
                        {success && (
                            <div
                                className="alert alert-success alert-dismissible fade show col-12"
                                role="alert"
                            >
                                {success}
                            </div>
                        )}
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Nama Paket Penjualan
                                </label>
                                <TextInput
                                    id="nama_paket"
                                    type="text"
                                    name="nama_paket"
                                    value={data.nama_paket}
                                    className="form-control rounded-top"
                                    onChange={(e) =>
                                        setData("nama_paket", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.nama_paket}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Harga
                                </label>
                                <TextInput
                                    id="harga"
                                    type="number"
                                    name="harga"
                                    value={data.harga}
                                    className="form-control rounded-top"
                                    onChange={(e) =>
                                        setData("harga", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.harga}
                                    className="mt-2"
                                />{" "}
                            </div>

                            <PrimaryButton
                                disabled={processing}
                                className="mb-3"
                            >
                                Tambah paket
                            </PrimaryButton>
                        </form>
                    </div>

                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama Paket</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paket.map((p, index) => (
                                <tr key={index}>
                                    <td>{++index}</td>
                                    <td>{p.nama_paket}</td>
                                    <td>Rp{p.harga}</td>
                                    <td>
                                        <a
                                            href={`/paket/${p.id}/edit`}
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
                                                    deletePaket(e, p.id);
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
