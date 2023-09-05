import { ProductsAPI } from "api/products_api";
import PageTitle from "infra/PageTitle";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";

export const getServerSideProps = async () => {
	const products = await ProductsAPI.getProducts();
	return {
		props: {
			products: products,
		},
	};
};

interface PropsProducts {
	products: IProduct[];
}

export default function Products({ products }: PropsProducts) {
	return (
		<>
			<PageTitle title='Products' />
			<section>
				{products.map(product => (
					<article key={product.id}>
						<hgroup>
							<h2>{product.normal_name}</h2>
							<h1>{product.special_name}</h1>
						</hgroup>
						<p>{product.description}</p>
						<section>
							<p>Extras:</p>
							<ul>
								{product.extras.map(extra => (
									<li key={extra}>{extra}</li>
								))}
							</ul>
						</section>
						<section>
							<p>Sizes:</p>
							<ul>
								{product.sizes.map(size => (
									<li key={size.tag}>
										<FontAwesomeIcon icon={faArrowLeft} />
										<img src={product.img} />
										<FontAwesomeIcon icon={faArrowLeft} />
										<p>
											{size.label} - {size.quantity}
										</p>
									</li>
								))}
							</ul>
						</section>
						<p>R$0000</p>
						<div>
							<span>Quantity</span>
							<FontAwesomeIcon icon={faArrowLeft} />
							3
							<FontAwesomeIcon icon={faArrowLeft} />
						</div>
						<Button>ADD TO CART</Button>
					</article>
				))}
			</section>
		</>
	);
}
