function showHidePassword() {
    const passEye = document.querySelector( '#pass-eye-icon' );
    const confPassEye = document.querySelector( '#conf-pass-eye-icon' );

    const passInput = document.querySelector( '#input-pass' );
    const confPassInput = document.querySelector( '#input-conf-pass' );

    const faEye = '<i class="fas fa-eye" aria-hidden="true"></i>';
    const faEyeSlash = '<i class="fas fa-eye-slash" aria-hidden="true"></i>';

    let counterPassClick = 0;
    let counterConfPassClick = 0;

    function passModeChange( icon, input ) {
        icon.addEventListener( 'click', ( counter ) => {
            if( icon === passEye )
                counter = counterPassClick === 0 ? counterPassClick = 1 : counterPassClick = 0;
            else
                counter = counterConfPassClick === 0 ? counterConfPassClick = 1 : counterConfPassClick = 0;
            changeIconState( icon, counter );
            changeInputState( input, counter );
        } );
    }

    function changeIconState( icon, counter ) {
       counter === 0 ? hidePasswordIcon( icon ) : showPasswordIcon( icon ); 
    }

    function changeInputState( input, counter ) {
        counter === 0 ? input.type = 'password' : input.type = 'text';
    }

    function showPasswordIcon( icon ) {
        icon.innerHTML = faEye;
    }

    function hidePasswordIcon( icon ) {
        icon.innerHTML = faEyeSlash;
    }

    passModeChange( passEye, passInput );
    passModeChange( confPassEye, confPassInput );
}

showHidePassword()
