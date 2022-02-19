// UI 

// START NAVBAR 
const navheader = document.querySelector('.navheader');

window.addEventListener('scroll',()=>{

    let getscrolly = window.scrollY;

    // console.log(getscrolly);
    if(getscrolly >= 290){
        navheader.classList.add('show');
    }else{
        navheader.classList.remove('show');
    }
});

const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',()=>{
    const html = document.querySelector('html');

    if(toggle.checked){
        html.classList.add('dark');
        console.log('add');
    }else{
        html.classList.remove('dark');
        console.log('remove');
    }
});


const menuitems = document.querySelectorAll('.menuitems');

menuitems.forEach((menuitem)=>{
    menuitem.addEventListener('click',()=>{
        if(menuitem.classList.contains('active')){
            menuitem.classList.remove('active');

        }else{

            menuitems.forEach((menuitem)=>{
                menuitem.classList.remove('active');
            })
            menuitem.classList.add('active');
        }
    });
});

// END NAVBAR 

// START CONTENT 

let contents = [
    {
        title: "Lesson 1",
        contentheader: "What is HTML?",
        content: "HTML ရဲ့ အရှည်ကောက်က Hyper Text Markup Language ဖြစ်ပြီးတော့ သူ့ကို Website တွေမှာ infromation တွေ ဖော်ပြပေးဖို့အတွက် အသုံးပြုပါတယ်။ HTML ကို Sir Tim Berners-Lee က 1991 မှာ ဖန်တီးခဲ့ပေမယ့် တရားဝင်ထုတ်ပြန်ခဲ့တာက 1995 ခုနှစ်မှာ HTML 2.0 အနေနဲ့ စထွက်ခဲ့တာဖြစ်ပြီး အခု ချိန်မှာတော့ HTML 5 ထိထွက်ရှိပြီးပါပြီ။HTML က WEBSITE တွေတည်ဆောက်တဲ့နေရာမှာ အဓိက ကျတဲ့ အခန်းကဏ္ဍကနေပါဝင်နေပြီး browser ကို information တွေ ဘယ်လိုပြပေးရမလည်းဆိုတာကို သိရှိအောင် ပြုလုပ်ပေးပါတယ် <div class='img-container'><img src='./img/lesson1/01_lesson1.png' alt=''></div>ဒါက html ကို စတင်ရေးသားမယ်ဆိုရင် လိုအပ်တဲ့ ကျောရိုးတစ်ခုပဲဖြစ်ပါတယ် html file တိုင်း ဒီ format ကို လိုက်နာရပါတယ်။ အဲ့ဒီမှာ &#60;&#33;&#68;&#79;&#67;&#84;&#89;&#80;&#69;&nbsp;&#104;&#116;&#109;&#108;&#62; ဆိုတာသည် browser ကို ကိုယ်ရေးထားတဲ့ code တွေက html language ဖြစ်တယ်ဆိုတာကို ကြေညာပေးတာ declare လုပ်ပေးတာဖြစ်တယ် ပြီးရင် &#60;&#104;&#116;&#109;&#108;&#62; (အဖွင့်) &#60;&#47;&#104;&#116;&#109;&#108;&#62; (အပိတ်) ရှိမယ် အဲ့ အဖွင့်အပိတ်ထဲမှာမှ &#60;&#104;&#101;&#97;&#100;&#62; (အဖွင့်) &#60;&#47;&#104;&#101;&#97;&#100;&#62; (အပိတ်) &#60;&#98;&#111;&#100;&#121;&#62; (အဖွင့်) &#60;&#47;&#98;&#111;&#100;&#121;&#62; (အပိတ်) တွေပါရှိပါမယ်။ လူ့ခန္ဓာကိုယ်တစ်ခုလိုပေါ့ဗျာ ခေါင်းပိုင်းနဲ့ ခန္ဓာကိုယ်ပိုင်းပေါ့။အဲ့ဒီမှာမှ head ပိုင်းသည် browser ထိပ်ဆုံးကနေရာလေးမှာအလုပ်လုပ်ပြီး body ကတော့ အောက်က အဖြူရောင်နေရာမှာ အလုပ်လုပ်ပါတယ်ဗျ html ဟာ အဖွင့်အပိတ်တွေနဲ့ ဖွဲ့စည်းထားတာဖြစ်ပြီး &#60;&#104;&#116;&#109;&#108;&#62; &#60;&#47;&#104;&#116;&#109;&#108;&#62; ဒီလို အဖွင့်အပိတ် တစ်စုံကို html element လို့ခေါ်ပါတယ်။ &#60;&#104;&#116;&#109;&#108;&#62; ဒီလို တစ်ခုတည်းဆိုရင်တော့ tag လို့ခေါ်ပါတယ်။ <div class='img-container'><img src='./img/lesson1/02_lesson1.png' alt=''></div>ပုံမှာပြထားတဲ့အတိုင်း html web page တစ်ခုမှာ  &#60;&#104;&#101;&#97;&#100;&#62;&nbsp;&#60;&#47;&#104;&#101;&#97;&#100;&#62; ထဲမှာရှိတဲ့ ကုတ်တွေက ဘရောက်ဇာရဲ့ အနီမျဉ်းအပိုင်းအခြား နေရာမှာ နေရာယူ အလုပ်လုပ်ပြီးတော့ &#60;&#98;&#111;&#100;&#121;&#62;&nbsp;&#60;&#47;&#98;&#111;&#100;&#121;&#62; အဖွင့်အပိတ်ထဲမှာရှိတဲ့ကုတ်တွေကတော့ အစိမ်းမျဉ်း အပိုင်းအခြားနေရာမှာ နေရာယူ အလုပ်လုပ် ကြပါတယ်။ html file ကို .html ဆို တဲ့ extensition နဲ့ save ရပါတယ် ဒါဆို html အကြောင်းမိတ်ဆက်တာ တော်တော်လေးပြည့်စုံသွားပြီဖြစ်လို့ နောက်တစ်ပိုင်းမှာပြန်တွေ့ကြတာပေါ့။"
    },
    {
        title: "Lesson 2",
        contentheader: "Heading tag",
        content:"HTML မှာ ခေါင်းစဉ်ကို ရေးသားဖော်ပြလိုတဲ့ အခါ သုံးရတဲ့ tag က heading tag ပဲ ဖြစ်ပါတယ် သူ့ကို level အလိုက် 6 ခု ခွဲထားပါတယ် &#60;&#104;&#49;&#62; က အကြီးဆုံး ဖောင့်နဲ့ ဖော်ပြမှာဖြစ်ပြီး &#60;&#104;&#54;&#62; ကတော့ အသေးဆုံးဖောင့်ဆိုဒ်နဲ့ ဖော်ပြမှာပါ။ ပုံကိုကြည့်ပါ။ <hr/> <div class='img-container'><img src='./img/lesson2/01_lesson2.png' alt=''></div> <hr/> <div class='img-container'><img src='./img/lesson2/02_lesson2.png' alt=''></div> <hr/> ရေးရတဲ့ ပုံစံက &#60;&#104;&#49;&#62;Hello&#60;&#47;&#104;&#49;&#62;  Hello နေရာမှာ ကိုယ်ကြိုက်တဲ့ စာသား အစားထိုးရေးသားလို့ရပါတယ်။ အဲ့တာဆို ခေါင်းစဉ်ကတော့ ဟုတ်ပြီ စာပိုဒ်တွေကျတော့ ဘယ်လိုရေးရမလည်း လွယ်ပါတယ် <h1 class='text-center my-2 text-decoration-underline text-uppercase'>Paragraph tag</h1> စာပိုဒ်တွေကို &#60;&#112;&#62; tag နဲ့ ရေးရပါတယ် ဒီလိုပါ &#60;&#112;&#62;hello myanmar&#60;&#47;&#112;&#62;  hello myanmar နေရာမှာ ကိုယ်ကြိုက်တဲ့စာသားကို အစားထိုးရေးသားလို့ရပါတယ်။ ဒီcode တွေက body အဖွင့်အပိတ်ထဲမှာရေးရတဲ့ ကုတ်တွေပါ။ ပုံကိုကြည့်ပါ။ <hr/> <div class='img-container'><img src='./img/lesson2/03_lesson2.png' alt=''></div> <hr/> <div class='img-container'><img src='./img/lesson2/04_lesson2.png' alt=''></div> <hr/> <h1 class='text-center my-2 text-decoration-underline text-uppercase'>Formatting tag</h1> Formatting tag ဆိုတာက စာပိုဒ်တွေကို modify လုပ်တဲ့ tag တွေပဲဖြစ်ပါတယ်။ ပထမဆုံးတစ်ခုကို စလေ့လာကြည့်ရအောင် ပထမဆုံးတစ်ခုက &#60;&#98;&#62;  ဖြစ်ပါတယ် သူက ဘာလုပ်ပေးလည်းဆိုတော့ သူ့ထဲမှာရှိတဲ့ စာသားကို bold လုပ်ပေးပါတယ်။ &#60;&#98;&#62;This is bold text&#60;&#47;&#98;&#62; This is bold text နေရာမှာကိုယ်ကြိုက်တာ ထည့်ရေးလို့ရပါတယ်။ ပုံကိုကြည့်ပါ။ <hr/> <div class='img-container'><img src='./img/lesson2/05_lesson2.png' alt=''></div> <hr/> <div class='img-container'><img src='./img/lesson2/06_lesson2.png' alt=''></div> <hr/> <h1 class='text-center my-2 text-decoration-underline text-uppercase'>Line Breaking Tag</h1> နောက်တစ်ခုက br ပါ သူက ဘာလုပ်ပေးလည်းဆိုတော့ စာပိုဒ်တစ်ပိုဒ်ပြီးသွားလို့ နောက်စာပိုဒ်တစ်ခုကို လိုင်းတစ်ကြောင်းအောက် ဆင်းသွားစေချင်ရင် ဒီ br လေးကိုသုံးရပါတယ် ဒီမှာတစ်ခု စပြီး ထူးခြားလာတာက သူ့မှာ အပိတ်မပါပါဘူး သူ့ကိုယ်သူပဲပြန်ပိတ်ပါတယ်။ &#60;&#98;&#114;&#47;&#62;  ဒီလိုပါ။ self closing tag လို့လည်းခေါ်ပါတယ်။ သူက စာပိုဒ်တွေကို လိုင်းတစ်ကြောင်းအောက်ဆင်းသွားအောင်ပြုလုပ်ပေးပါတယ်။<h1 class='text-center my-2  text-decoration-underline'>br မပါတာ</h1><hr/> <div class='img-container'><img src='./img/lesson2/07_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/08_lesson2.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>br ပါတာ</h1><hr/><div class='img-container'><img src='./img/lesson2/09_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/10_lesson2.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline text-uppercase'>Underline</h1>နောက်တစ်ခုက underline  HTML မှာ underline တားချင်ရင် ဘယ်လိုလုပ်မလည်း လွယ်ပါတယ် &#60;&#117;&#62; လေးထဲ ထည့်ရေးလိုက်ရင်ရပါပြီ ဗျ &#60;&#117;&#62;Hello Myanmar&#60;&#47;&#117;&#62; ဒီလိုပါ Hello Myanmar နေရာမှာ ကိုယ် underline တားချင်တဲ့ စာကိုရေးရပါတယ်။ပုံကိုကြည့်ပါ။<hr/><div class='img-container'><img src='./img/lesson2/11_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/12_lesson2.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline text-uppercase'>italic</h1>နောက်တစ်ခုက italic ပါ စာလုံးတွေကို စောင်းစောင်းလေး ဖော်ပြစေချင်တယ် ဆိုရင် &#60;&#105;&#62; နဲ့ရေးရပါတယ်&#60;&#105;&#62;Hello Myanmar&#60;&#47;&#105;&#62; i အဖွင့်အပိတ်ထဲမှာ ကိုယ်ကြိုက်တာ ထည့်ရေးလို့ရပါတယ်ဗျ။ ကိုယ်တိုင်စမ်းရေးကြည့်ပါ။ ပုံမှာလည်းပြထားပေးပါတယ်။ <hr/><div class='img-container'><img src='./img/lesson2/13_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/14_lesson2.png' alt=''></div><hr/>ကိုယ်က စာသားတစ်ခုကို bold လည်းဖြစ်ချင်တယ် underline လည်းလုပ်ချင်တယ် italic လည်းဖြစ်စေချင်တယ်ဆိုရင် ဘယ်လိုရေးမလည်း လွယ်ပါတယ် bold ဖြစ်ချင်ရင် ဘယ်ထဲထည့်ရမှာလည်းဆိုတော့ &#60;&#98;&#62; အဖွင့်အပိတ်ထဲပါ အဲ့တော့ &#60;&#98;&#62;&#60;&#117;&#62;&#60;&#105;&#62;HelloMyanmar&#60;&#47;&#105;&#62;&#60;&#47;&#117;&#62;&#60;&#47;&#98;&#62; အဖွင့်ရှိရင်အပိတ်ရှိမယ် ဒီမှာသတိထားရမှာက&#60;&#98;&#62; နဲ့စဖွင့်ပေမယ့် ပြန်ပိတ်တော့ &#60;&#47;&#98;&#62; က နောက်ဆုံးမှာရောက်နေရမှာပါ အဖွင့်အပိတ်တွေ မမှန်ရင် effect မဝင်ပါဘူး။ ပုံကိုကြည့်ပါ။ <hr/><div class='img-container'><img src='./img/lesson2/15_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/16_lesson2.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline text-uppercase'>horizonal line</h1> br နဲ့ နောက်ထပ် ဆင်တူတဲ့ ဟာ တစ်ခုက&#60;&#104;&#114;&#47;&#62; ပါ သူကကျ အောက်တစ်ကြောင်းလည်းဆင်းသွားစေတယ် မျဉ်းတစ်ကြောင်းလည်းပိတ်ပေးပါတယ် width 100% ပါ ပုံကိုကြည့်ပါ။<hr/><div class='img-container'><img src='./img/lesson2/17_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/18_lesson2.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Block Element & Inline Element</h1> HTML  မှာ &#60;&#104;&#49;&#62; ဒီလို တစ်ခုတည်းကို tag လို့ ခေါ်ပြီးတော့ &#60;&#104;&#49;&#62;&nbsp;&#60;&#47;&#104;&#49;&#62;  ဒီလို အစုံလိုက်ကို element လို့ခေါ်ပါတယ်။ အဲ့ဒီ element ကို အမျိုးအစား ၂ ခု ထပ်ခွဲထားပါတယ်။ Block Element နဲ့ Inline Element ပါ သူတို့ ၂ခု ဘယ်လိုကွာခြားတာလည်း လေ့လာကြည့်ရအောင်  Inline Element က သူ့ထဲမှာ စာသားရှိနေသလောက်ပဲနေရာယူပါတယ် ကျန်တဲ့သူ့ဘေးမှာ နေရာဘယ်လောက်ပိုပို သူ မယူပါဘူး။ ဒါပေမယ့် Block Element ကကျတော့ width 100% အပြည့်နေရာယူပါတယ် သူ့ဘေးမှာ ဘယ်သူမှ နေရာဝင်ယူလို့မရပါဘူး ဒါလေးကို မြင်သာ​အောင် ပုံလေးနဲ့ပြထားပေးပါမယ် ပိုပြီးသိသာအောင် css effect လေး ထည့်ပေးထားပါတယ် အဲ့ css effect ကို ဂရုစိုက်စရာမလိုပါဘူး block element က နေရာဘယ်လိုယူတယ်ဆိုတာ မြင်သာအောင်ပြပေးတာပါ။ <hr/><div class='img-container'><img src='./img/lesson2/19_lesson2.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson2/20_lesson2.png' alt=''></div><hr/> ဒီပုံမှာဆိုရင် ကုတ်ကိုအရင်ကြည့်ပါ br တွေ hr တွေ မထည့်ထားပါဘူး ဒါပေမယ့် h1 tag နဲ့ ရေးထားတဲ့နောက်မှာ ဘာစာသားမှ မရှိတော့ပါဘူး ဘာလို့ဆိုတော့ သူက block element ဖြစ်ပြီး width အပြည့် နေရာယူထားလို့ပါ ဒါပေမယ့် အောက်က b နဲ့ ရေးထားတဲ့ tag မှာကျတော့ စာနှစ်ခု တွဲပေါ်နေပါတယ် ရှင်းပါတယ် သူက inline element ဖြစ်လို့ပါ သူတို့နေရာယူပုံတွေကို background color လေးနဲ့ပြထားပါတယ် မြင်မယ်လို့ထင်ပါတယ် ဒါဆို element ဆိုရင် group 2 ခုရှိတယ်လို့ မှတ်ထားပါ Block Element နဲ့ Inline Element ပါ ။ နောက်သင်ခန်းစာမှာပြန်တွေ့ကြတာပေါ့။"
    },
    {
        title:"Lesson 3",
        contentheader: "Title tag",
        content:"သူက head tag ထဲမှာနေပြီးတော့ အဲ့ title tag ထဲမှာရေးလိုက်တဲ့ ဟာက browser tag မှာ ဖော်ပြပေးပါတယ် ပုံကိုကြည့်ပါ။ <hr/><div class='img-container'><img src='./img/lesson3/01_lesson3.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson3/02_lesson3.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Marquee tag</h1> သူ့ကို ဘယ်နေရာမှာ သုံးလည်းဆိုတော့ breaking news လို သတင်းတွေကြေညာတဲ့အခါ စာတမ်းလေးတွေ ပြေးသွားနေစေချင်တဲ့ အခါမျိုးမှာသုံးပါတယ် အသုံးတော့ နည်းပါတယ် သိထားရအောင်လို့ ထည့်သင်ပေးတာပါ ဒီ Marquee tag ကျ စာလေးတွေက ပြေးနေမှာမို့ video ကျတော့လည်း အဆင်မပြေလို့ မပြတော့ပါဘူး ကိုယ့်ဘာသာ စမ်းသပ်ကြည့်ကြပါ ပုံကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson3/03_lesson3.png' alt=''></div><hr/> ဟုတ်ပြီ အဲ့တော့ သူ့ကို ဦးတည်ရာ direction ပြောင်းလို့မရဘူးလားဆိုရင် ပြောင်းလို့ရပါတယ် ဘယ်လိုပြောင်းလည်းဆိုတော့ ပုံထဲကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson3/04_lesson3.png' alt=''></div><hr/> အဲ့ဒီမှာ direction ဆိုတာကို attribute လို့ ခေါ်ပါတယ်။ အဲ့ attribute မှာမှ direction ဆိုတာသည် (property) နောက် က left , right  ဆိုတာတွေက (value) လို့ခေါ်ပါတယ် အဲ့တော့ ကိုယ့်ဘာသာကိုယ် left right ပြောင်းထည့်ကြည့်ပါ သူက 4 မျိုးရှိပါတယ် left , right , up , down ပါ  ပုံထဲမှာ လည်းပြထားပေးပါမယ် <hr/><div class='img-container'><img src='./img/lesson3/05_lesson3.png' alt=''></div><hr/>အဲ့မှာမှ marquee နဲ့ ပက်သက်ပြီး နောက်ထပ်သိစရာရှိသေးတာက behavior ပါ စာလုံးပေါင်းမမှားပါစေနဲ့ သတိထားပါ သူက ဘာလုပ်ပေးလည်းဆိုတော့ စာတန်းလေး စထွက်လာပြီးရင် ပြန်မဝင်သွားတော့ပဲ ဟိုဘက် ဒီဘက် သွားနေစေချင်တဲ့အခါမျိုးမှာ သုံးရပါတယ် ပုံကိုကြည့်ပါ။ပြီးတော့ သူ့ကို width နဲ့ height လည်းသတ်မှတ်ပေးထားလို့ရပါသေးတယ် အဲ့တာဆိုသူက သတ်မှတ်ပေးထားတဲ့ width height အတွင်းမှာပဲ အလုပ်လုပ်ပါတယ် ပြီးတော့ သူ့ရဲ့ speed ကိုလည်းထိန်းချုပ်လို့ရပါသေးတယ် scrollamount ဆိုတဲ့ attribute နဲ့ပါ scrollamount ကို px ဒါမှ မဟုတ် % နဲ့ သတ်မှတ်လို့ရပါတယ် သူ့မှာ တစ်ခြား attribute တွေ property တွေရှိသေးပေမယ့် ဒီလောက်သိထားရင် ရပါပြီ <hr/><div class='img-container'><img src='./img/lesson3/06_lesson3.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson3/07_lesson3.png' alt=''></div><hr/> <h1 class='text-center my-2  text-decoration-underline'>Comment</h1> သိတဲ့အတိုင်းပဲ comment ဆိုတာက မှတ်ချက် အဲ့တော့ မှတ်ချက်ဘယ်လိုရေးမလည်း html မှာ comment မှာ ၂ မျိုးရှိတယ် single line comment နဲ့ multiline comment ပါ အဲ့တော့ အဲ့လို comment ထဲ ထည့်ထားလိုက်ရင် browser ကိုသူက ဒီထဲက ကောင်တွေက ဘောင်မဝင်ဘူး ဂရုမစိုက်နဲ့ ကျော်သွားဆိုတဲ့ ပုံစံမျိုးပြောလိုက်တဲ့အတွက် အဲ့ထဲက စာတွေ ကုတ်တွေက browser တွေမှာ လာပြပေးမှာ မဟုတ်တော့ပါဘူး <h1 class='text-center my-2  text-decoration-underline'>Single line comment</h1> ဘာမှ ထွေထွေထူးထူးတော့ မဟုတ်ပါဘူး  ပုံထဲကလို တစ်ကြောင်းထဲကို ပိတ်ထားရင် Single line comment လို့ခေါ်တာပေါ့ <hr/><div class='img-container'><img src='./img/lesson3/08_lesson3.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Multi line comment</h1>  အဲ့တော့ လိုင်းအများကြီးကိုပိတ်ချင်ရင်ရော multil line comment ကိုသုံးရပါတယ် ဘယ်လိုလည်းဆိုတော့သူက ကိုယ်ပိတ်ချင်သလောက် line တွေကို select မှတ်ပြီး ctrl + / key တွဲနှိပ်ပေးလိုက်ရုံပါပဲ ပုံထဲမှာ ဘယ်လိုပုံစံလည်းဆိုတာ ပြထားပါတယ် အဲ့ comment ထဲက စာတွေက browser မှာပေါ်မှာမဟုတ်ပါဘူး right click နှိပ်ပြီး view page source ထောက်ကြည့်မှပဲ မြင်ရပါလိမ့်မယ် <hr/><div class='img-container'><img src='./img/lesson3/09_lesson3.png' alt=''></div><hr/>နောက်သင်ခန်းစာတစ်ခုမှာပြန်တွေ့ကြတာပေါ့။"
    },
    {
        title:"Lesson 4",
        contentheader: "Pre tag",
        content:"ဒီ pre tag ကတော့ စာပိုဒ်တွေရေးရင် p tag နဲ့ရေးပေမယ့် ကျွန်တော်တို့ စာလုံးတွေ ကြားထဲမှာ space တွေ ဘယ်လောက်ခြားခြား browser က အဲ့ space တွေကို ထည့်မတွက်ပါဘူး ပုံမှန်အတိုင်းပဲ ပြသွားပါတယ် အဲ့တော့ ကျွန်တော်တို့က စာပိုဒ် တွေ ကြားထဲမှာ space လေးတွေ လိုချင်တယ် ဆို ဘယ်လိုလုပ်မလည်း လွယ်ပါတယ် pre tag အဖွင့်အပိတ်ထဲ ကောက်ထည့်လိုက်လို့ရပါတယ် သူက space တွေကိုပါ ပြပေးပါတယ် ဘယ်လိုနေရာတွေ မှာသုံးလည်းဆိုတော့ ကဗျာ တွေ ရေးတဲ့အခါမျိုးမှာ သုံးကြပါတယ် ပုံကိုကြည့်ပါ။ <hr/><div class='img-container'><img src='./img/lesson4/01_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/02_lesson4.png' alt=''></div><hr/> <h1 class='text-center my-2  text-decoration-underline'>Center</h1> နောက်တစ်ခုက စာကြောင်းတွေ စာပိုဒ်တွေကို web page ရဲ့ အလယ်ကို ပို့ချင်ရင် ဘယ်လိုပို့ရမလည်း လွယ်ပါတယ် center tag အဖွင့်အပိတ်ထဲ ထည့်ပေးလိုက်ရုံပါပဲ ပုံကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson4/03_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/04_lesson4.png' alt=''></div><hr/>နောက်တစ်မျိုးရေးလို့ရပါသေးတယ် ကိုယ်က center tag နဲ့ မသုံးချင်ဘူးဆိုရင် ဘယ်လိုလုပ်မလည်းပေါ့  align attribute ကိုသုံးပြီး value မှာ center လို့ပေးလိုက်ရင် စာတွေ အလယ်ရောက်သွားပါလိမ့်မယ် ပုံကိုကြည့်ပါ။ <hr/><div class='img-container'><img src='./img/lesson4/05_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/06_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Emphasized tag</h1>နောက်တစ်ခုက em tag ပါ သူက italic လို စာလုံးစောင်းစောင်းလေး နဲ့ ဖော်ပြပေးပါတယ် သူတို့ နှစ်ခု တူတယ်လို့ ထင်ရပေမယ့် တကယ်မတူပါဘူး ပုံကိုကြည့်ပါ i tag က သတိထားမိစေချင်တဲ့ စကားလုံး စကားပြော စာသားတွေကိုရေးတဲ့နေရာမှာသုံးပြီး em tag ကကျ အရေးပါတဲ့ စကားလုံးသို့မဟုတ် စကားစုကိုဖော်ပြလိုတဲ့ အခါ အသုံးပြုပါတယ် <hr/><div class='img-container'><img src='./img/lesson4/07_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/08_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Strong tag</h1>သူက အရေးကြီးတဲ့ စကားလုံးတွေ ဖော်ပြတဲ့ အခါမှာ အသုံးပြုပါတယ် သူ့ effect ကလည်း bold tag နဲ့ ခပ်ဆင်ဆင် တူပါတယ် ပုံကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson4/09_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/10_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Mark tag</h1> နောက်တစ်ခုက mark tag ပါ သူက တော့ အမှတ်အသားလုပ်ပေးထားတာပါ highlightလုပ်ပေးတဲ့ သဘောပေါ့ ပုံကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson4/11_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/12_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Del tag</h1> သူက တော့ စာကို ဖျက်ထားသလို အလယ်ကနေဖျက်ပြီး မျဉ်းတားပေးပါတယ် သူ့ထဲရှိနေတဲ့ စာတွေကိုပေါ့ ဘယ်လိုနေရာတွေ မှာသုံးလည်းဆိုရင် စျေးဆိုင်တွေ ပစ္စည်းကို မူလစျေးထက် ပရိုမိုးရှင်းချတဲ့နေရာမျိုမှာ ဒီ del tag ကိုသုံးပြီး မူလစျေးကို ဖျက်ပါတယ် <hr/><div class='img-container'><img src='./img/lesson4/13_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/14_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Ins tag</h1> နောက်တစ်ခုက ins tag သူက လည်း underline လုပ်ပေးတာပါပဲ ဒါပေမယ့် သူ့အဓိပ္ပာယ်က Insert လုပ်ထားတဲ့ စာတွေကို ပြသဖို့ အတွက် သုံးတာပါ ထပ်ဖြည့်ထားတဲ့ စာတွေပေါ့ အဲ့လိုစာတွေကို ins နဲ့ရေးလို့ရပါတယ် <hr/><div class='img-container'><img src='./img/lesson4/13_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/14_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Supscripted  tag</h1> သူကကျ ထပ်ညွှန်းနေရာမှာ ပြပေးပါတယ် သူ့ကိုကျ 2  2ထပ်တို့ 3  ထပ်တို့ လို ရေးတဲ့ နေရာမျိုးမှာ အသုံးပြုပါတယ် ထပ်ညွှန်းဖြစ်စေချင်တာကို sup tag ထဲ ထည့်ရေးလိုက်ရုံပါပဲ ပုံကိုကြညိ့ပါ <hr/><div class='img-container'><img src='./img/lesson4/15_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/16_lesson4.png' alt=''></div><hr/><h1 class='text-center my-2  text-decoration-underline'>Subscripted tag</h1> နောက်တစ်ခုက သူက အောက်ခြေ ကို ဆင်းပြီး ဖော်ပြပေးပါတယ် ဘယ်လိုနေရာမှာသုံးလည်းဆိုတော့ ကျွန်တော်တို့ chemical terms တွေရေးတဲ့နေရာတွေ မှာ အသုံးပြုပါတယ်(ဥပမာ) ပုံကိုကြည့်ပါ <hr/><div class='img-container'><img src='./img/lesson4/17_lesson4.png' alt=''></div><hr/><div class='img-container'><img src='./img/lesson4/18_lesson4.png' alt=''></div><hr/>နောက်သင်ခန်းစာတစ်ခုမှာပြန်တွေ့ကြတာပေါ့"
    }
];



for(let key in contents){
    const content_container =document.querySelector('.content-container');
    const content = document.createElement('div');
    content.classList.add('content');
    
    const content_title = document.createElement('h3');
    content_title.classList.add('content-title');
    content_title.innerHTML = contents[key].title;

    const content_header = document.createElement('div');
    content_header.className = "content-header text-center text-decoration-underline text-uppercase my-4 h2";
    content_header.innerHTML = contents[key].contentheader;
    
    const content_text = document.createElement('div');
    content_text.classList.add('content-text');
    content_text.innerHTML = contents[key].content;

    

    
    const content_toggle = document.createElement('button');
    content_toggle.classList.add('content-toggle');
    content_toggle.innerHTML = "<i class='fas fa-chevron-down'></i> <i class='fas fa-times'></i>";

    content.appendChild(content_title);
    content.appendChild(content_header);
    content.appendChild(content_text);
    content.appendChild(content_toggle);
    content_container.appendChild(content);
}


const togglebtns = document.querySelectorAll('.content-toggle');

// console.log(togglebtns);

togglebtns.forEach(togglebtn=>{

    togglebtn.addEventListener('click',()=>{
        togglebtn.parentElement.classList.toggle('active');
    });
});

// END CONTENT 

// Start Footer Section
const showyears = document.getElementById('showyears');
const getfullyear = new Date().getUTCFullYear();

showyears.textContent = getfullyear;
// End Footer Section 