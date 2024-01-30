let txt = document.getElementById("message");

function encriptar(){
    let image = document.getElementById("munheco")
    let txtP = document.getElementById("txt-p")
    let pTxt = document.getElementsByClassName("txt")
    let btnCopi = document.getElementById("btnCopy")
    let text = txt.value.toLowerCase()
    let textNew = "";

    for (let i = 0; i < text.length; i++){
        switch(text[i]) {
            case "a":
                textNew+="ai";
                break;
            case "e":
                textNew+="enter";
                break;
            case "i":
                textNew+="imes";
                break;
            case "o":
                textNew+="ober";
                break;
            case "u":
                textNew+="ufat";
                break;     
            default:
                textNew+=text[i];
                break;
        }
    }

    image.style.display = "none";
    for (let i = 0; i < pTxt.length; i++) {
        pTxt[i].style.display = "none";
    }
    btnCopi.style.display = "block";
    txtP.innerText=textNew;
    txtP.style.display = "block";
    console.log(textNew)
}

function desencriptar(){
    let image = document.getElementById("munheco")
    let txtP = document.getElementById("txt-p")
    let pTxt = document.getElementsByClassName("txt")
    let btnCopi = document.getElementById("btnCopy")
    let repla = ['a', 'e', 'i', 'o', 'u'];
    let vocales= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    let text = txt.value.toLowerCase()

    for (let i = 0; i < vocales.length; i++)
        text = text.replace(vocales[i], repla[i])
    console.log(text)

    image.style.display = "none";
    for (let i = 0; i < pTxt.length; i++) {
        pTxt[i].style.display = "none";
    }
    btnCopi.style.display = "block";
    txtP.innerText=text;
    txtP.style.display = "block";
}

function copy() {
    const element = document.getElementById('txt-p');
    if (element) {
      const text = element.innerText;
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    } else {
      console.error(`Element with id '${id}' not found`);
    }
  }