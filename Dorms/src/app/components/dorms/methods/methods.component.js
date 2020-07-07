var dormsMethods = {
	template: `
		<div>
			<ul>
                <li ui-sref-active="active">
					<a ui-sref="dorms.keenan">Keenan</a>
				</li>
				<li ui-sref-active="active">
					<a ui-sref="dorms.welshfam">WelshFam</a>
				</li>  
                <li ui-sref-active="active">
					<a ui-sref="dorms.zahm">Zahm</a>
				</li>
                <li ui-sref-active="active">
					<a ui-sref="dorms.sorin">Sorin</a>
				</li>
                <li ui-sref-active="active">
					<a ui-sref="dorms.alumni">Alumni</a>
				</li>
                <li ui-sref-active="active">
					<a ui-sref="dorms.farley">Farley</a>
				</li>
                <li ui-sref-active="active">
					<a ui-sref="dorms.pe">PE</a>
				</li>
			</ul>
		</div>
	`
};

angular
	.module('dorms')
	.component('dormsMethods', dormsMethods);