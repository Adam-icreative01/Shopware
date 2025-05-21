<?php declare(strict_types=1);

namespace SwagBlog\Storefront\Controller;

// use Custom\Plugins\SwagBlog\Src\Storefront\Page\BlogPageLoader;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class BlogController extends StorefrontController
{
    // private BlogPageLoader $blogPageLoader;
    // public function __construct(BlogPageLoader $blogPageLoader)
    // {
    //     $this->blogPageLoader = $blogPageLoader;
    // }

    #[Route(path: '/blog-hello-world', name: 'frontend.blog', methods: ['GET'])]
    public function showBlog(Request $request, SalesChannelContext $context): Response
    {

        // $page = $this->blogPageLoader->load($request, $context);
        return $this->renderStorefront('@SwagBlog/storefront/page/blog.html.twig', [
            'heading' => 'Hello, Shopware 6 !',
            // 'page' => $page
        ]);
    }
}