import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DangerLink from "@/Components/DangerLink";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="container">
                {auth.user.role === "admin" ? (
                    <>
                        <div
                            className="card text-bg-info mb-3"
                            style={{ maxWidth: "18rem" }}
                        >
                            <a
                                href={route("addsales")}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Buat Akun Sales
                                    </h5>
                                </div>
                            </a>
                        </div>

                        <div
                            className="card mb-3"
                            style={{
                                maxWidth: "18rem",
                                backgroundColor: "limegreen",
                            }}
                        >
                            <a
                                href={route("paket")}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Buat Paket</h5>
                                </div>
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            className="card mb-3"
                            style={{
                                maxWidth: "18rem",
                                backgroundColor: "#EBF400",
                            }}
                        >
                            <a
                                href={route("profile.edit")}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Customers Management
                                    </h5>
                                </div>
                            </a>
                        </div>

                        <div
                            className="card mb-3"
                            style={{
                                maxWidth: "18rem",
                                backgroundColor: "#836FFF",
                            }}
                        >
                            <a
                                href={route("paket")}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Buat Paket</h5>
                                </div>
                            </a>
                        </div>
                    </>
                )}

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                ID Pegawai {auth.user.id_pegawai}
                            </div>
                            <div>Role: {auth.user.role}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 space-y-1">
                    <DangerLink
                        method="post"
                        href={route("logout")}
                        style={{ maxWidth: "7rem" }}
                        className="p-1"
                        as="button"
                    >
                        Log Out
                    </DangerLink>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
