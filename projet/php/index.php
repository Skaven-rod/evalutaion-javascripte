<?php session_start();    ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/modale-cookie.css" />
  <script defer src="../js/modale-cookie.js"></script>
  <script defer src="../js/cookie-runner.js"></script>
  <title>Document</title>
</head>

<body>

  <section>
    <div>
      <div id=titre>
        <h1>Cookie Runner</h1>
      </div>

      <button id="bouton">
        <div>
          Afficher
        </div>
      </button>
    </div>
    <div id="modale">
      <div class="contenu">
        <button id="bouton-fermer" class="bouton-fermer">
          <div>
            X
          </div>
        </button>
        accepte-tu le saint cookie
        <button id="bouton-valider" class="bouton-valider">
          <div>
            <a href="../php/index2.php">
              Je Valide
            </a>
          </div>
        </button>
      </div>

    </div>

    <script src="../jv/modale-cookie.js"></script>
    <i class="fa-solid fa-xmark"></i>
    </div>
  </section>
  </header>
</body>

</html>