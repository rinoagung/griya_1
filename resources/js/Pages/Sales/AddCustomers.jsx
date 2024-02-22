import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Customer({ auth, paket }) {
    const { data, setData, post, errors, processing } = useForm({
        id_paket: "",
        nama: "",
        no_telp: "62",
        alamat: "",
        foto_rumah: undefined,
        foto_ktp: undefined,
    });

    const submit = (e) => {
        e.preventDefault();
        // post(route("customer"));
        router.post(`/customer`, data);
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
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
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
                                    required
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
                                    onChange={(e) =>
                                        setData("foto_rumah", e.target.files[0])
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.foto_rumah}
                                    className="mt-2"
                                />{" "}
                            </div>
                            <div className="mb-3">
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
                                    onChange={(e) =>
                                        setData("foto_ktp", e.target.files[0])
                                    }
                                    required
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
                                Tambah customer
                            </PrimaryButton>
                        </form>

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
