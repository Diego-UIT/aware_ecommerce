import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
    margin: 30px 0;
    font-size: 18px;
    font-weight: normal;
    color: #202124;
    text-align: center;
    text-transform: capitalize;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`;

const Filter = styled.div`
    margin: 30px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-top: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const Catalog = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const CatalogContent = styled.div`
    flex-grow: 1;
`;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
        ...filters,
        [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Title>{cat}</Title>
            <Catalog>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled>Color</Option>
                            <Option>white</Option>
                            <Option>black</Option>
                            <Option>red</Option>
                            <Option>blue</Option>
                            <Option>gray</Option>
                            <Option>pink</Option>
                        </Select>
                        <Select name="size" onChange={handleFilters}>
                            <Option disabled>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <CatalogContent>
                    <Products cat={cat} filters={filters} sort={sort} />
                </CatalogContent>
            </Catalog>
            <Footer />
        </Container>
    );
};

export default ProductList;
