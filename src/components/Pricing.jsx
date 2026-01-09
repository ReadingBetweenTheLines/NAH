import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'The Starter',
      price: '$299',
      period: '/month',
      features: [
        '2 sessions per week',
        'Personalized feedback',
        'Access to resources',
        'Progress tracking',
      ],
      popular: false,
    },
    {
      name: 'The Professional',
      price: '$599',
      period: '/month',
      features: [
        '4 sessions per week',
        '1-on-1 coaching',
        'Custom learning path',
        'Priority support',
        'Real-world practice',
        'Confidence building',
      ],
      popular: true,
    },
    {
      name: 'The Elite',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited sessions',
        'Dedicated coach',
        '24/7 support',
        'Business English focus',
        'Presentation training',
        'Interview prep',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight"
        >
          Choose Your <span className="gradient-text">Tier</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-xl mb-16"
        >
          Investment in fluency. Not a subscription.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative ${
                plan.popular ? 'p-[2px] rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#F97316]' : ''
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-[#2563EB] to-[#F97316] px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </motion.div>
              )}
              <div className={`glass rounded-3xl p-8 relative ${plan.popular ? 'bg-[#0a0a0a]' : ''}`}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check
                        size={20}
                        className="text-[#2563EB] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#F97316] text-white shadow-xl shadow-orange-500/30'
                      : 'glass border border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
