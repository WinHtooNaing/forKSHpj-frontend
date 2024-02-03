import React from "react";
import "../index.css";
import Footer from "./Footer.jsx"
const About = () => {
  return (
    <>
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h3 className="about-title">about our project</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
         <p>ကျတော်တို့ website မှာ အဓိက အားဖြင့် web development နဲ့ ပတ်သတ်တယ့် သိထားသင့်တယ့် အခြေခံ အကြောင်းအရာတွေ ကို လေ့လာလို့ ရမှာ ဖြစ်ပါတယ်။</p>
         <p>ကျတော်တို့ project ရဲ့ အဓိက ရည်ရွယ်ချက် ကတော့ web development ကို စလေ့လာနေတယ့် သူတွေ ဒါမှမဟုတ် လေ့လာဖို့ ရည်ရွယ်ထားပေမယ့် ဘယ်က စလေ့လာရမှန်းမသိတယ့် သူတွေ အတွက် ရည်ရွယ်ပြီး ဖန်တီးထားတာ ဖြစ်ပါတယ်</p>
         <p>အခုမှ programming ဘာသာရပ်ကိုစလေ့လာမယ့်beginner များအနေနဲ့လည်း နားလည်ရလွယ်ကူစေမည် ဟု မျှော်လင့်မိပါတယ်။</p>
      </div>

      <Footer/>
    </>
  );
};

export default About;
