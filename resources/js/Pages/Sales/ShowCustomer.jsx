import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Customer({ auth, customer }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Info Pelanggan
                </h2>
            }
        >
            <Head title="Customer" />
            <div className="container my-5">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        <div
                            className="card mb-3"
                            style={{ maxWidth: "540px" }}
                        >
                            <div className="row g-0">
                                <div className="col-md-3 m-auto">
                                    <h5 className="card-title text-center mt-3">
                                        Foto Rumah
                                    </h5>
                                    <img
                                        src={`/storage/${customer.foto_rumah}`}
                                        className="img-fluid rounded mb-2"
                                        alt="..."
                                    />
                                    <h5 className="card-title text-center">
                                        Foto KTP
                                    </h5>
                                    <img
                                        src={`/storage/${customer.foto_ktp}`}
                                        className="img-fluid rounded mb-3"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-8 m-auto">
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Nama:</th>
                                                    <th scope="col">
                                                        {customer.nama}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Alamat:</th>
                                                    <td>{customer.alamat}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">No HP:</th>
                                                    <td>{customer.no_telp}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Pilihan Paket:
                                                    </th>

                                                    <td>
                                                        {
                                                            customer.paket
                                                                .nama_paket
                                                        }{" "}
                                                        (Rp
                                                        {customer.paket.harga})
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            href={route("dashboard")}
                            className="text-underline"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
