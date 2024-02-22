import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        id_pegawai: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("addsales"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        <main>
                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal text-center">
                                    Create an account
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
                                        Confirm Password
                                    </label>
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />{" "}
                                </div>

                                <PrimaryButton disabled={processing}>
                                    Register
                                </PrimaryButton>

                                <Link
                                    href={route("dashboard")}
                                    className="text-underline"
                                >
                                    Back
                                </Link>
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
