
                
                    <?php if (!isset($_SESSION['id'])) { ?>
                    <?php } else { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="ajout-Photo.php"><?= ("Ajout photo") ?></a>

                    <li class="nav-item">
                        <a class="nav-link" href="ajout-video.php"><?= ("Ajout vidéo") ?></a>

                    <li class="nav-item">
                        <a class="nav-link" href="ajout-musique.php"><?= ("Ajout Musique") ?></a>
                    <?php } ?>

                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><?= ("Dépot") ?></a>
                    </li> -->
            </ul>
            <div>
                <a href="change-langage.php?langue=fr">FR</a>
                <a href="change-langage.php?langue=en">EN</a>
            </div>
            
        </div>
    </div>
</nav>