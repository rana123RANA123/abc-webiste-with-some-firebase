import React from 'react'

export default function LastFooter() {
    return (
        <>

            <div className="container-fluid" style={{backgroundColor:"#edede9"}}>
                <div className="row">
                    <div className="col">
                        <div class="footer-copy-right text-center mb-2">
                            Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script> All rights reserved | This template is made with by <b><u>MR.LAZY_DEVELOPER</u></b>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
