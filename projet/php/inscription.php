<?php include "index2.php" ?>
<?php include "navbarre.php" ?>

<h1>Inscription</h1>

<?php if (isset($_POST['login'])) {
    include "conection-bdd.php";
    //préparation de  la requête
    $requete = $connexion->prepare('INSERT INTO utilisateur (login, password, admin) VALUES (? ,? , ?)');







    $MotDePasseDecrypt = password_hash(
        $_POST['password'],
        PASSWORD_BCRYPT
    );



    try {
        // execution requette 
        $requete->execute([
            $_POST["login"], $MotDePasseDecrypt, 0

        ]);
        header('location:  conection.php');
    } catch (PDOException $erreur) {
        echo 'login déja utiliser';
    };
}
?>

<form method="POST">
    <input name="login">
    <input name="password" type="password">
    <input type="submit" value="inscription">
</form>