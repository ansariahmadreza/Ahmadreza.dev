import { IcartItemsProps, RootProps, ThumbsGallery } from "@/features/products";
import { allImg } from "@/shared";


export const generateMetadata = async ({ params }: RootProps) => { /// for the title and description of the page
    const { slug } = await params;
    const product = allImg.find(item => item.slug === slug);

    return {
        title: product ? product.description : "Product Not Found",
        description: product ? product.description : "No description available"
    };
};

const detail = async ({ params }: RootProps) => {

    const { slug } = await params;
    const product_information = allImg.find(item => item.slug === slug) as IcartItemsProps | undefined

    if (product_information !== undefined) return (
        <section className="min-h-screen">
            <ThumbsGallery product_information={product_information} />
        </section>
    )
};
export default detail;