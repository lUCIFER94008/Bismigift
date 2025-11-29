import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, RefreshCw, Truck, HelpCircle } from 'lucide-react';

export const PolicyPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const policies: Record<string, { title: string; icon: any; content: any }> = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      content: <PrivacyContent />
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      content: <TermsContent />
    },
    refund: {
      title: 'Refund Policy',
      icon: RefreshCw,
      content: <RefundContent />
    },
    shipping: {
      title: 'Shipping Policy',
      icon: Truck,
      content: <ShippingContent />
    },
    faq: {
      title: 'Frequently Asked Questions',
      icon: HelpCircle,
      content: <FAQContent />
    }
  };

  const policy = policies[type || ''];

  if (!policy) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-gray-900 dark:text-gray-100">Policy not found</h1>
          <Link to="/" className="text-cyan-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = policy.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h1 className="text-3xl text-gray-900 dark:text-gray-100">{policy.title}</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Last updated: November 28, 2024</p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md prose prose-lg dark:prose-invert max-w-none">
            {policy.content}
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyContent = () => (
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Information We Collect</h2>
      <p>We collect information you provide directly to us, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Name, email address, phone number</li>
        <li>Shipping and billing addresses</li>
        <li>Payment information (processed securely through payment gateways)</li>
        <li>Order history and preferences</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Process and fulfill your orders</li>
        <li>Communicate with you about your orders and our services</li>
        <li>Send you promotional materials (with your consent)</li>
        <li>Improve our products and services</li>
        <li>Prevent fraud and ensure security</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information
        against unauthorized access, alteration, disclosure, or destruction.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of marketing communications</li>
      </ul>
    </section>
  </div>
);

const TermsContent = () => (
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Acceptance of Terms</h2>
      <p>
        By accessing and using this website, you accept and agree to be bound by the terms and provision
        of this agreement.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Use of Website</h2>
      <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Product Information</h2>
      <p>
        We strive to provide accurate product descriptions and images. However, we do not warrant that
        product descriptions or other content is accurate, complete, reliable, current, or error-free.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Pricing</h2>
      <p>
        All prices are subject to change without notice. We reserve the right to modify or discontinue
        products without prior notice.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Limitation of Liability</h2>
      <p>
        Bismi Gift House shall not be liable for any indirect, incidental, special, consequential or
        punitive damages resulting from your use of our website or products.
      </p>
    </section>
  </div>
);

const RefundContent = () => (
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Return Window</h2>
      <p>
        We accept returns within 7 days of delivery. Products must be unused, in original packaging,
        and in the same condition as received.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Non-Returnable Items</h2>
      <p>The following items cannot be returned:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Gift cards</li>
        <li>Customized or personalized products</li>
        <li>Products marked as non-returnable</li>
        <li>Items showing signs of use or damage</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Refund Process</h2>
      <p>Once we receive and inspect your return:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>We will notify you of the approval or rejection of your refund</li>
        <li>If approved, refund will be processed to your original payment method</li>
        <li>Refunds typically take 5-7 business days to reflect in your account</li>
      </ol>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Exchange Policy</h2>
      <p>
        We accept exchanges for defective or damaged products. Contact our customer service within
        48 hours of delivery for exchanges.
      </p>
    </section>
  </div>
);

const ShippingContent = () => (
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Delivery Time</h2>
      <p>Standard delivery typically takes 2-5 business days, depending on your location.</p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Shipping Charges</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Orders below ₹999: ₹50 shipping charge</li>
        <li>Orders above ₹999: Free shipping</li>
        <li>Express delivery: Additional charges apply</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Order Tracking</h2>
      <p>
        Once your order is shipped, you will receive a tracking number via email and SMS. You can
        track your order status in your account dashboard.
      </p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Delivery Areas</h2>
      <p>We currently deliver across India. International shipping is not available at this time.</p>
    </section>

    <section>
      <h2 className="text-2xl mb-3 text-gray-900 dark:text-gray-100">Failed Delivery</h2>
      <p>
        If delivery fails due to incorrect address or unavailability, additional delivery charges
        may apply for re-delivery attempts.
      </p>
    </section>
  </div>
);

const FAQContent = () => (
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">How do I place an order?</h3>
      <p>
        Browse products, add items to cart, proceed to checkout, fill in delivery details, choose
        payment method, and confirm your order.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">What payment methods do you accept?</h3>
      <p>We accept Cash on Delivery (COD), UPI, and Credit/Debit Cards.</p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">How can I track my order?</h3>
      <p>
        Log in to your account and go to "My Orders" section. You'll find tracking information
        for all your orders there.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">Do you offer gift wrapping?</h3>
      <p>
        Yes! You can add gift wrapping to any product for just ₹50 per item during checkout or
        on the product page.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">What is the Rewards Program?</h3>
      <p>
        Earn 5% reward points on every purchase. Redeem points for discounts on future orders.
        1 reward point = ₹0.1 discount.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">How do I contact customer support?</h3>
      <p>
        You can reach us via email at info@bismigifthouse.com, call +91 9605773773, or use the
        live chat feature on our website.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">Do you offer wholesale pricing?</h3>
      <p>
        Yes! Visit our Wholesale page to submit an enquiry for bulk orders and get special
        wholesale pricing.
      </p>
    </section>

    <section>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">Can I cancel my order?</h3>
      <p>
        Orders can be cancelled within 24 hours of placement. Contact customer support immediately
        if you need to cancel.
      </p>
    </section>
  </div>
);
