<?php declare(strict_types=1);

namespace Custom\Plugins\SwagBlog\Src\Storefront\Page;

use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\GenericPageLoaderInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;

// class BlogPageLoader
// {
//     private GenericPageLoaderInterface $genericPageLoader;

//     private EventDispatcherInterface $eventDispatcher;

//     public function __construct(GenericPageLoaderInterface $genericPageLoader, EventDispatcherInterface $eventDispatcher)
//     {
//         $this->genericPageLoader = $genericPageLoader;
//         $this->eventDispatcher = $eventDispatcher;
//     }

//     public function load(Request $request, SalesChannelContext $context): BlogPage
//     {
//         $page = $this->genericPageLoader->load($request, $context);
//         $page = BlogPage::createFrom($page);

//         // Do additional stuff, e.g. load more data from store api and add it to page
//         // $page->setExampleData(...);

//         $this->eventDispatcher->dispatch(
//             new BlogPageLoadedEvent($page, $context, $request)
//         );

//         return $page;
//     }
// }