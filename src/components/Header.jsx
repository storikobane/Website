import React from 'react';
    import { motion } from 'framer-motion';

    function Header() {
      return (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="header"
        >
          <h1>Stori Kobane</h1>
        </motion.header>
      );
    }

    export default Header;
