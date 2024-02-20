import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        id_pegawai: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        <main>
                            {status && (
                                <div
                                    className="d-flex align-items-center alert alert-dark alert-dismissible fade show p-2 text-white"
                                    role="alert"
                                    style={{
                                        backgroundColor: "#FF004D",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
                                    </svg>
                                    &ensp;{status}
                                    <button
                                        type="button"
                                        className="btn-close"
                                        style={{ padding: "12px" }}
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}

                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal text-center">
                                    Login
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
                                <PrimaryButton disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
