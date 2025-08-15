function redeSocialFavorita(){
    let redeSocial = (prompt("Instagram, TikTok, Facebook, Linkedin"))
    switch(redeSocial){
        case "Instagram":
            alert("Perfeito para fotos e stories!")
            break;
        case "TikTok":
            alert("Vídeos curtos e muita dança.")
            break;
        case "Twitter":
            alert("O lugar das notícias rápidas e memes.")
            break;
        case "Facebook":
            alert("Clássico, mas ainda forte para grupos.")
            break;
        case "Linkedin":
            alert("Rede profissional e network.")
            break
            default:
                alert("Cade tuas redes sociais ? ")    
            
    }
}