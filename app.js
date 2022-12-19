const btn = document.getElementById('myBtn')
const bckColor = [
 'https://fikiwiki.com/uploads/posts/2022-02/1644860175_19-fikiwiki-com-p-kartinki-krasivikh-gor-25.jpg',
 'https://vsegda-pomnim.com/uploads/posts/2022-04/1650923364_45-vsegda-pomnim-com-p-gori-italii-foto-51.jpg',
 'https://s1.1zoom.ru/b5050/260/Forests_Trees_Rays_of_light_580224_3840x2400.jpg',
 'https://img3.goodfon.ru/original/2048x1345/3/92/highway-410-washington-state-shtat-vashington-doroga-les-der.jpg',
 'https://images.wallpaperscraft.com/image/single/trees_forest_snow_333931_3840x2400.jpg',
]

// btn.onclick = function() {
//     console.log('Click!')
// }

btn.addEventListener('click', () => {
    document.body.style.backgroundImage = `url('${getRandomImage()}')`
})

function getRandomImage() {
    let index = Math.floor(Math.random() * bckColor.length);
    return bckColor[index];
}

