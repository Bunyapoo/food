import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row">
                
              <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/7.png" layout="responsive" className="card-img-top" width={100} height={250} alt="..." />
                 <div className="card-body">
                 <h5 className="card-title">เมนูยอดนิยมทางร้าน</h5>
                 <p className="card-text">ราคาเริ่มต้น ที่ 89 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
              </div>
            </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/1.png" layout="responsive" className="card-img-top" width={100} height={250} alt="..." />
                 <div className="card-body">
                 <h5 className="card-title">ร้านกาแฟ เวลาร้านเปิด</h5>
                 <p className="card-text">ราคาเริ่มที่ 50 บาท ก็มี</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/4.png" layout="responsive" className="card-img-top" width={100} height={250} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">คาปูชิโน่</h5>
                 <p className="card-text">เพียง 70 บาท</p>
                 <a href="#" className="btn btn-primary">ดูรายละเอียดเพิ่มเติม</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}