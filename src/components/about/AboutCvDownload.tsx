const AboutCvDownload: React.FC = () => {
    const handleDownloadCV = () => {
        const cvFileUrl =
          "https://dl.dropboxusercontent.com/scl/fi/w6rl3zf1g30vakwqxzkkh/Tornike_Butiashvili.pdf?rlkey=phi84c9r29w6d19xjybpy3sd1&dl=0";
        const downloadLink = document.createElement("a");
    
        downloadLink.href = cvFileUrl;
        downloadLink.download = "Tornike_Butiashvili.pdf";
    
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
    
      return (
        <button
          onClick={handleDownloadCV}
          className="text-white px-8 py-4 border border-NavBorderColor"
        >
          Download CV
        </button>
      );
    };

export default AboutCvDownload;
