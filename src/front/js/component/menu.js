import React from "react";
import { Link } from "react-router-dom";
import "../../styles/menu.scss";

export const Menu = () => {
	return (
		<>
			<div className="handheld-toolbar mx-0 mt-5 d-block">
				<div id="color" className="d-table table-layout-fixed w-100  text-center">
					<a className="d-table-cell handheld-toolbar-item" href="account-wishlist.html">
						<span className="handheld-toolbar-icon">
							<i className="far fa-heart" />
						</span>
						<br />
						<span className="handheld-toolbar-label">Wishlist</span>
					</a>
					<a
						className="d-table-cell handheld-toolbar-item-mid"
						href="javascript:void(0)"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						onClick="window.scrollTo(0, 0)">
						<span className="handheld-toolbar-icon">
							<i className="fas fa-bars" />
						</span>
						<br />
						<span className="handheld-toolbar-label">Menu</span>
					</a>
					<a className="d-table-cell handheld-toolbar-item" href="shop-cart.html">
						<span className="handheld-toolbar-icon">
							<i className="fas fa-shopping-cart" />
						</span>
						<br />
						<span className="handheld-toolbar-label">$265.00</span>
					</a>
				</div>
			</div>
		</>
	);
};
