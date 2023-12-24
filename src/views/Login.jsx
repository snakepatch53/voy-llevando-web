import AnimateElement from "../components/AnimateElement";
import "./Login.css";

export default function Login() {
    return (
        <>
            {/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= $DATA['http_domain'] ?>public/library.general/animate.min.css">
    <link rel="stylesheet" href="<?= $DATA['http_domain'] ?>public/library.general/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="<?= $DATA['http_domain'] ?>public/css.general/config.css">
    <link rel="stylesheet" href="<?= $DATA['http_domain'] ?>public/css.general/theme1.css">
    <link rel="stylesheet" href="<?= $DATA['http_domain'] ?>public/css.panel/login.css">
    <link rel="icon" href="<?= $DATA['http_domain'] ?>public/img/icon.png">
    <title><?= $DATA['title'] ?> ⚙️ Login</title>
    <script>
        const http_domain = '<?= $DATA['http_domain'] ?>';
    </script>
</head> */}

            <AnimateElement className="login">
                <form id="element-loginform">
                    <h1>Bienvenido a</h1>
                    <div className="logo">
                        <img src="./img/logo.png" alt="Logo de VoyLlevando" />
                    </div>
                    <div className="input">
                        <label htmlFor="user">DNI / Email</label>
                        <input
                            type="text"
                            name="user_user"
                            id="user"
                            placeholder="Ingrese su Usuario"
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            name="user_pass"
                            id="password"
                            placeholder="Ingrese su Contraseña"
                        />
                    </div>
                    <div className="input input-msg">
                        <p id="element-msg-login"></p>
                    </div>
                    <div className="input input-btn">
                        <button type="submit">INICIAR SESION</button>
                    </div>
                    <div className="input input-line">
                        <div className="line"></div>
                        <span>O</span>
                        <div className="line"></div>
                    </div>
                    <div className="input input-or">
                        <span>¿Eres Nuevo?</span>
                        <a href="<?= $DATA['http_domain'] ?>panel/register">REGISTRATE GRATIS</a>
                    </div>
                </form>
            </AnimateElement>
        </>
    );
}
