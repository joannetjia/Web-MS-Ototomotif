import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { CategorySection } from './components/CategorySection';
import { ValueProposition } from './components/ValueProposition';
import { ProductCatalog } from './components/ProductCatalog';
import { ShopPage } from './components/ShopPage';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuotationDrawer } from './components/QuotationDrawer';
import { PdfCatalogModal } from './components/PdfCatalogModal';
import { SalesModal } from './components/SalesModal';
import { Product, ActiveTab, QuotationItem } from './types';
import { PRODUCTS_DATA } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<QuotationItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<string>('Semua');

  // Handle adding product to PO cart
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    tier: 'retail' | 'wholesale' = 'wholesale'
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.tier === tier
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, tier }];
    });
  };

  const handleUpdateQty = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigating to Shop from the main navigation menu (displays ALL categories)
  const handleNavigateToShopMenu = () => {
    setSelectedCatalogCategory('Semua');
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigating to Shop from a specific Category card on Home
  const handleSelectCategoryFromHome = (catName: string) => {
    setSelectedCatalogCategory(catName);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans selection:bg-[#7197bc]/30 selection:text-white">
      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateToShop={handleNavigateToShopMenu}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openPdfModal={() => setIsPdfModalOpen(true)}
        openSalesModal={() => setIsSalesModalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Carousel */}
            <HeroCarousel
              onSelectProduct={(product) => setSelectedProduct(product)}
              onExploreCatalog={handleNavigateToShopMenu}
              onSelectCategory={handleSelectCategoryFromHome}
            />

            {/* 3 Main Categories Cards (Karburator, As Skok, Kaliper) */}
            <CategorySection
              onSelectCategory={handleSelectCategoryFromHome}
            />

            {/* Featured Catalog Preview */}
            <ProductCatalog
              onSelectProduct={(product) => setSelectedProduct(product)}
              onAddToCart={handleAddToCart}
              initialCategory="Semua"
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* 4 Pillars Value Proposition */}
            <ValueProposition
              onContactSales={() => setIsSalesModalOpen(true)}
              onExploreCatalog={handleNavigateToShopMenu}
            />
          </>
        )}

        {/* Dedicated Shop Page */}
        {activeTab === 'shop' && (
          <ShopPage
            selectedCategory={selectedCatalogCategory}
            onSelectCategory={(cat) => setSelectedCatalogCategory(cat)}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onAddToCart={handleAddToCart}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onNavigateHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContactSales={() => setIsSalesModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection
            onExploreShop={handleNavigateToShopMenu}
            onContactUs={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPdf={() => setIsPdfModalOpen(true)}
        onOpenSales={() => setIsSalesModalOpen(true)}
        onSelectCategory={handleSelectCategoryFromHome}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* PO / Quotation Drawer */}
      <QuotationDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onOpenPdf={() => {
          setIsCartOpen(false);
          setIsPdfModalOpen(true);
        }}
      />

      {/* PDF Catalog Modal */}
      <PdfCatalogModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Sales Regional Contact Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </div>
  );
}

