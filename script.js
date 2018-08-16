// $('.top_menu div').on('click', function() {
//     $(this).find('svg').find('path').toggleClass('activated_top_button');
//     console.log('pelo menos foi')
// })


// var topIcons = document.querySelectorAll('.top_menu div svg')

// topIcons.addEventListener("click", function() {
//     console.log('NOKSADMKSDKAMKP')
// })





// SEE PROFILE BUTTON

let see_profile = document.querySelector('.see_more')
let name_bar = document.querySelector('.name_bar')
let profile_photo = document.querySelector('.image_container')
let profile_window = document.querySelector('.hidden_profile')
let voltar_playmatch = document.querySelector('.return')
let voltar_playmatch_two = document.querySelector('.top_menu')

see_profile.addEventListener('click', showHiddenProfile)
name_bar.addEventListener('click', showHiddenProfile)
profile_photo.addEventListener('click', showHiddenProfile)

voltar_playmatch.addEventListener('click', hideHiddenProfile)
voltar_playmatch_two.addEventListener('click', hideHiddenProfile)


function hideHiddenProfile() {
    profile_window.classList.remove('show_hidden_profile')
}


function showHiddenProfile() {
    profile_window.classList.add('show_hidden_profile')
}









// LIKE E UNLIKE
var likeButton = document.querySelector('.like_container')
var unlikeButton = document.querySelector('.unlike_container')

likeButton.addEventListener('click', function() {
    if(!this.querySelector('img').classList.contains('like_container_move')) {
        this.querySelector('img').classList.add('like_container_move');
    } else {
        this.querySelector('img').classList.remove('like_container_move');
    }
})

unlikeButton.addEventListener('click', function() {

    if(!this.querySelector('img').classList.contains('unlike_container_move')) {
        this.querySelector('img').classList.add('unlike_container_move');
    } else {
        this.querySelector('img').classList.remove('unlike_container_move');
    }
})







// UNLIKE/LIKE CLICK ANIMATIONS

let playMiddle = document.querySelector('.playmatch_middle')
let compatibility = document.querySelector('.compatibility')
let compatibilityLevel = document.querySelector('.level_container')
let compatibilityH2 = document.querySelector('.compatibility h2')

function unlikePressed() {

    if(!playMiddle.classList.contains('playmatch_middle_unlike_animation')) {
        playMiddle.classList.add('playmatch_middle_unlike_animation')
        compatibility.classList.add('compatibility_unlike_animation')
        compatibilityLevel.classList.add('level_container_unlike_animation')
        compatibilityH2.classList.add('compatibility_h2_unlike_animation')
    } else {
        playMiddle.classList.remove('playmatch_middle_unlike_animation')
        compatibility.classList.remove('compatibility_unlike_animation')
        compatibilityLevel.classList.remove('level_container_unlike_animation')
        compatibilityH2.classList.remove('compatibility_h2_unlike_animation')
    }

}

unlikeButton.addEventListener('click', unlikePressed)
















































// CLICK OPTIONS - CONNECTIONS

let clickOptions = document.querySelectorAll('.friends_container article')
let escapeArea = document.querySelector('.around_escape')

for(subclickOptions in clickOptions) {
    clickOptions[subclickOptions].addEventListener('click', function() {
        if(!this.querySelector('.click_options').classList.contains('click_option_appear')) {
            this.querySelector('.click_options').classList.add('click_option_appear')
            escapeArea.classList.add('around_escape_appear')
        } else {
            this.querySelector('.click_options').classList.remove('click_option_appear')
            escapeArea.classList.remove('around_escape_appear')
        }
    })
}

