import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function EditPaket({ auth, paket, errors, success }) {
    const { data, setData, post, processing } = useForm({
        nama_paket: paket.nama_paket,
        harga: paket.harga,
        _method: "put",
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(`/paket/${paket.id}`, data);
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
                                Update paket
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
