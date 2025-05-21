<?php declare(strict_types=1);

namespace SwagBlog\Api\Controller;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @RouteScope(scopes={"api"})
 */
#[Route(defaults: ['_routeScope' => ['api']])]
class BlogApiController extends AbstractController
{
    private EntityRepository $blogRepository;

    public function __construct(EntityRepository $blogRepository)
    {
        $this->blogRepository = $blogRepository;
    }

    #[Route(path: '/api/blog', name: 'api.blog.list', methods: ['GET'])]
    public function getAllBlogs(Request $request, Context $context): JsonResponse
    {
        $criteria = new Criteria();
        $criteria->addAssociation('blogCategories');
        $criteria->addAssociation('products');

        $blogs = $this->blogRepository->search($criteria, $context);

        return new JsonResponse($blogs->getEntities());
    }

    #[Route(path: '/api/blog/{id}', name: 'api.blog.detail', methods: ['GET'])]
    public function getBlog(string $id, Context $context): JsonResponse
    {
        $criteria = new Criteria([$id]);
        $criteria->addAssociation('blogCategories');
        $criteria->addAssociation('products');

        $blog = $this->blogRepository->search($criteria, $context)->first();

        if (!$blog) {
            return new JsonResponse(['message' => 'Blog not found'], 404);
        }

        return new JsonResponse($blog);
    }
}
