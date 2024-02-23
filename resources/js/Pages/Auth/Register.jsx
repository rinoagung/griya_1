// import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function Register({ success, errors, auth, sales }) {
    const { data, setData, post, processing } = useForm({
        id_pegawai: "",
        password: "",
        password_confirmation: "",
    });

    const deleteSales = (e, id) => {
        router.delete(`/sales/${id}`);
    };
    const submit = (e) => {
        e.preventDefault();

        post(route("addsales"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Akun Sales
                </h2>
            }
        >
            <Head title="Register" />
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        {success && (
                            <div
                                className="alert alert-success alert-dismissible fade show col-12"
                                role="alert"
                            >
                                {success}
                            </div>
                        )}
                        <main>
                            <form onSubmit={submit} className="mb-3">
                                <h1 className="h3 mb-3 fw-normal text-center">
                                    Buat Akun Sales
                                </h1>
                                <div className="form-floating">
                                    <TextInput
                                        id="id_pegawai"
                                        type="text"
                                        name="id_pegawai"
                                        value={data.id_pegawai}
                                        className="form-control rounded-top"
                                        onChange={(e) =>
                                            setData(
                                                "id_pegawai",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <label htmlFor="id_pegawai">
                                        Id Pegawai
                                    </label>

                                    <InputError
                                        message={errors.id_pegawai}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="form-floating">
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control rounded-top"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />{" "}
                                </div>
                                <div className="form-floating">
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="form-control rounded-top"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <label htmlFor="password_confirmation">
                                        Konfirmasi Password
                                    </label>
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />{" "}
                                </div>

                                <PrimaryButton disabled={processing}>
                                    Tambahkan
                                </PrimaryButton>
                            </form>
                            <Link
                                href={route("dashboard")}
                                className="text-underline"
                            >
                                Back
                            </Link>
                        </main>
                    </div>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Id Pegawai</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((s, index) => (
                                <tr key={index}>
                                    <td>{++index}</td>
                                    <td>{s.id_pegawai}</td>
                                    <td>{s.role}</td>
                                    <td>
                                        <button
                                            className="badge bg-transparent border-0 shadow-sm d-inline"
                                            onClick={(e) => {
                                                if (
                                                    window.confirm(
                                                        "Anda yakin ingin menghapus data ini?"
                                                    )
                                                ) {
                                                    deleteSales(e, s.id);
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
