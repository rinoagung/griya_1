import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Paket({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        nama_paket: "",
        harga: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("paket"));
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
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
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

                            <PrimaryButton disabled={processing}>
                                Tambah paket
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}