import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function EditCustomers({
    customer,
    auth,
    paket,
    errors,
    success,
}) {
    const [previewRumah, setPreviewRumah] = useState(null);
    const [previewKTP, setPreviewKTP] = useState(null);

    const { data, setData, post, processing } = useForm({
        id_paket: customer.id_paket,
        nama: customer.nama,
        no_telp: customer.no_telp,
        alamat: customer.alamat,
        foto_rumah: undefined,
        foto_ktp: undefined,
        old_foto_rumah: customer.foto_rumah,
        old_foto_ktp: customer.foto_ktp,
        _method: "put",
    });

    const submit = (e) => {
        e.preventDefault();
        // post(route("customer"));
        router.post(`/customer/${customer.id}`, data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Pelanggan
                </h2>
            }
        >
            <Head title="Customer" />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5">
                        {success && (
                            <div
                                className="alert alert-success alert-dismissible fade show col-lg-7"
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
                                    Pilih Paket
                                </label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={data.id_paket}
                                    onChange={(e) =>
                                        setData("id_paket", e.target.value)
                                    }
                                >
                                    <option defaultValue={""}>
                                        Pilih Paket
                                    </option>
                                    {paket.map((p, index) => (
                                        <option key={index} value={p.id}>
                                            {p.nama_paket} (Rp{p.harga})
                                        </option>
                                    ))}
                                </select>
                                <InputError
                                    message={errors.id_paket}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Nama Pelanggan
                                </label>
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    value={data.nama}
                                    className="form-control rounded-top"
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Alamat Pelanggan
                                </label>
                                <TextInput
                                    id="alamat"
                                    type="text"
                                    name="alamat"
                                    value={data.alamat}
                                    className="form-control rounded-top"
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.alamat}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    No telepon (gunakan 62)
                                </label>
                                <TextInput
                                    id="no_telp"
                                    type="number"
                                    name="no_telp"
                                    value={data.no_telp}
                                    className="form-control rounded-top"
                                    onChange={(e) =>
                                        setData("no_telp", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.no_telp}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <img
                                    src={
                                        previewRumah ||
                                        `/storage/${data.old_foto_rumah}`
                                    }
                                    className="foto-rumah-preview rounded mx-auto d-block"
                                    alt="...Foto Rumah"
                                    style={{ maxHeight: "100px" }}
                                />
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Foto Rumah
                                </label>
                                <TextInput
                                    id="foto_rumah"
                                    type="file"
                                    name="foto_rumah"
                                    className="form-control rounded-top"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setData("foto_rumah", file);
                                        if (file) {
                                            const imageUrl =
                                                URL.createObjectURL(file);
                                            setPreviewRumah(imageUrl);
                                        }
                                    }}
                                />
                                <InputError
                                    message={errors.foto_rumah}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
                                <img
                                    src={
                                        previewKTP ||
                                        `/storage/${data.old_foto_ktp}`
                                    }
                                    className="foto-ktp-preview rounded mx-auto d-block"
                                    alt="...Foto KTP"
                                    style={{ maxHeight: "100px" }}
                                />
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Foto KTP
                                </label>
                                <TextInput
                                    id="foto_ktp"
                                    type="file"
                                    name="foto_ktp"
                                    className="form-control rounded-top"
                                    onChange={(e) => {
                                        const file = e.target.files[0];

                                        setData("foto_ktp", file);
                                        if (file) {
                                            const imageUrl =
                                                URL.createObjectURL(file);
                                            setPreviewKTP(imageUrl);
                                        }
                                    }}
                                />
                                <InputError
                                    message={errors.foto_ktp}
                                    className="mt-2"
                                />{" "}
                            </div>

                            <PrimaryButton
                                disabled={processing}
                                className="mb-3"
                            >
                                Update Data
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
