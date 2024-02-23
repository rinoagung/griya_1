import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function viewPDF({ auth, customer, totalHarga }) {
    const generatePDF = () => {
        const report = document.querySelector("#report");

        html2canvas(report).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const doc = new JsPDF("l", "mm", "a4");
            const componentWidth = doc.internal.pageSize.width;
            const componentHeight = doc.internal.pageSize.height;
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
            doc.save("Pelaporan Pendapatan Customers.pdf");
        });
    };
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
                <Link href="/dashboard" className="text-underline pb-4 d-block">
                    Back
                </Link>
                <button
                    onClick={generatePDF}
                    type="button"
                    class="btn btn-info my-3"
                >
                    Export PDF
                </button>
                <div id="report" className="row justify-content-center pb-5">
                    <h3 className="text-center my-5">Data Customers</h3>
                    <h5 className="text-center my-5">
                        Total Pendapatan: RP{totalHarga}
                    </h5>
                    {customer.map((c, index) => (
                        <div className="col-lg-6" key={index}>
                            <div
                                className="card mb-3"
                                style={{ maxWidth: "540px" }}
                                key={index}
                            >
                                <div className="row g-0">
                                    <div className="col-md-3 m-auto">
                                        <h5 className="card-title text-center mt-3">
                                            Foto Rumah
                                        </h5>
                                        <img
                                            src={`/storage/${c.foto_rumah}`}
                                            className="img-fluid rounded mb-2"
                                            alt="..."
                                        />
                                        <h5 className="card-title text-center">
                                            Foto KTP
                                        </h5>
                                        <img
                                            src={`/storage/${c.foto_ktp}`}
                                            className="img-fluid rounded mb-3"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8 m-auto">
                                        <div className="card-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Nama:
                                                        </th>
                                                        <th scope="col">
                                                            {c.nama}
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            Alamat:
                                                        </th>
                                                        <td>{c.alamat}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            No HP:
                                                        </th>
                                                        <td>{c.no_telp}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Pilihan Paket:
                                                        </th>

                                                        <td>
                                                            {c.paket.nama_paket}{" "}
                                                            (Rp
                                                            {c.paket.harga})
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

if (document.getElementById("loadpdf")) {
    var data = document.getElementById("loadpdf").getAttribute("data");
    ReactDOM.render(
        <viewPDF data={data} />,
        document.getElementById("loadpdf")
    );
}
