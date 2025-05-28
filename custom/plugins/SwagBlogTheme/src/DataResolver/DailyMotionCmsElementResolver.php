<?php declare(strict_types=1);

namespace SwagBlog\DataResolver;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;

class DailyMotionCmsElementResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'dailymotion';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
        // $config = $slot->getFieldConfig();
        // $myCustomMedia = $config->get('myCustomMedia');

        // if (!$myCustomMedia) {
        //     return null;
        // }

        // $mediaId = $myCustomMedia->getValue();

        // $criteria = new Criteria([$mediaId]);

        // $criteriaCollection = new CriteriaCollection();
        // $criteriaCollection->add('media_' . $slot->getUniqueIdentifier(), MediaDefinition::class, $criteria);

        // return $criteriaCollection;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {      
        // $data = new ArrayStruct([
        //     'text' => 'Welcome to our store, check our top product: Awesome T-Shirt!'
        // ]); 

        // $slot->setData($data);
    }
}