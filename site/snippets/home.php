<main class="main-carousel">
  <?php foreach($page->children()->listed() as $projects): ?>
    <div class="children-carousel main-carousel-cell" id="<?= $projects->LinkTitle()?>">
        <?php foreach($projects->ProjectImages()->toFiles() as $contentImages): ?>
          <div class="children-carousel-cell">
            <img id="carousel-cell1" src="<?= $contentImages->crop(1191,1666.5)->url()?>" srcset="<?= $contentImages->srcset([]) ?> "> </img>
        </div>
        <?php endforeach ?>
        <div class="reveal static-banner" style="display : block;">
          <div class="project-text">
            <div class="title-project ">
            <span class="">  <?= $projects->ProjectNumber() ?> </span>
<span>   <?= $projects->ProjectYear() ?> </span>
<span class="plus">   + </span>

        </div>
        <div class="slider-box">
         <span class="description-project">
        <?= $projects->ProjectDescription() ?>
        </span>
        </div>
      </div>
    </div>
 </div>
  <?php endforeach ?>
</main>
