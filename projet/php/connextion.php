
<?php include "navbarre.php" ?>
<h1>Connection</h1>
<?php var_dump($_SESSION) ?>
<?php


echo password_hash("ADMIN",PASSWORD_BCRYPT);
exit();
if (isset($_POST["login"])) {
    // var_dump($_POST);


    include "conection-bdd.php";


    $requete = $connexion->prepare(
        'SELECT *
        FROM utilisateur
        WHERE login = ?'
    );

    $requete->execute(
        [$_POST['login']]
    );

    $utilisateur = $requete->fetch();
    // var_dump($utilisateur);


    if ($utilisateur == false) {
        echo " login existant";
    } else {
        $MotDePasseDecrypt = $utilisateur['password'];
        $MotDePasseEnClair = $_POST['password'];

        if (password_verify($MotDePasseEnClair, $MotDePasseDecrypt)) {

            $_SESSION['id'] = $utilisateur['id'];
            $_SESSION['login'] = $utilisateur['login'];
            $_SESSION['admin'] = $utilisateur['admin'];
            // dans la table de session de lutilisateur 
            // on affect a lindex id la valeur par exemple: 42
            header('location:  index.php');
        } else {
            echo "mauvais mot de passe";
        }
    }
}
?>

<form method="POST">
    <input name="login">
    <input name="password" type="password">
    <input type="submit" value="connection">
</form>