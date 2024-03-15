import NavBar from "./NavBar";
import PrivacyPolicy from "./../static/Privacy_Policy_Circlez.pdf";

const Privacy = () => {
    return (
        <div>
            <div className="bg-black min-h-screen flex justify-center">
            <object data={PrivacyPolicy} type="application/pdf" className="min-h-screen w-10/12">
                    <p>It appears you don't have a PDF plugin for this browser.
                    You can <a href={PrivacyPolicy}>click here to
                    download the PDF file.</a></p>
                </object>
            </div>
        </div>

    );
}

export default Privacy;