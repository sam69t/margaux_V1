<?= css('assets/css/index.css')?>
<?= css('assets/css/flickity.css')?>
<?= css('assets/css/mediaqueries.css')?>
<?php  $home = page('home');  ?>

    <?= css('@auto')?>



<footer class="footer">
    <a href="#" id="toggle "> About </a>

        <div id="CV"> 
            
       
<div class="cv-wrapper">
            
 <section class="section-curriculum">
 <section class="cv-presentation"id="Experience">
            
            <span class="title"> 

           <?= $home->prenom()->html() ?>
            <?= $home->nom()->html() ?>
        </span> 
        <div class="wow">
        <span>
        <?= $home->naissance()->html() ?>
      </span>
      <span>
        <?= $home->tel()->html() ?>
      </span>
      <span>
        <a href="mailto:<?= $home->mail()->html() ?>">
         hello@margauxmandrou.com
        </a> 
         
      </span> 
      <span>
      <a href="<?= $home->instagram()->html() ?>">
          Instagram
        </a>
      </span>
    
</div>
 </section>
    <?php $curriculums = $home->cv()->toStructure(); foreach ($curriculums as $curriculum): ?>
      <section class="curriculum <?= $curriculum->title() ?>">
        <span class="title">
          <?= $curriculum->title() ?>
        </span>
        <div class="wow">

        <?php $childs = $curriculum->list()->toStructure(); foreach ($childs as $child): ?>
         
          <div class="cc-content">
            <?php if($child->year()->isNotEmpty()):  ?>
              <span class="year">
                <?= $child->year() ?>
              </span>
            <?php endif ?>
            <span>
              <?php if($child->stageUrl()->isNotEmpty()):  ?>
              <a href="<?= $child->stageUrl()->url() ?>"><?= $child->title() ?></a>
              <?php else: ?>
              <?= $child->title() ?>
              <?php endif ?>
            </span>
            <span>
              <?php if($child->type()->isNotEmpty()):  ?>
              , <?= $child->type() ?>
              <?php endif ?>
            </span>
            <span>
              <?= $child->lieux() ?>
            </span>
          </div>
        <?php endforeach ?>
              </div>

      </section>

    <?php endforeach ?>
    

  </section>
  

   <div class="background-blur">
    </div>

 
    
</div>
<div class="credit">
<span> Margaux Mandrou © 2021 </span>

    <span> Web development & Design : Samuel Dumez </span>

  </div>
         </div>
 
</footer>

<?= js(['assets/js/jquery.js', '@auto']) ?>
<?= js([ 'assets/js/flickity.pkgd.js', '@auto']) ?>
<?= js([ 'assets/js/hash.js', '@auto']) ?>
<?= js([ 'assets/js/script.js', '@auto']) ?>



</body>
</html>