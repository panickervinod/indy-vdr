(function() {var implementors = {};
implementors["indy_vdr"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/common/did/struct.DidValue.html\" title=\"struct indy_vdr::common::did::DidValue\">DidValue</a>","synthetic":false,"types":["indy_vdr::common::did::DidValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/common/did/struct.ShortDidValue.html\" title=\"struct indy_vdr::common::did::ShortDidValue\">ShortDidValue</a>","synthetic":false,"types":["indy_vdr::common::did::ShortDidValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"indy_vdr/common/error/struct.VdrError.html\" title=\"struct indy_vdr::common::error::VdrError\">VdrError</a>&gt; for <a class=\"enum\" href=\"indy_vdr/common/error/enum.VdrErrorKind.html\" title=\"enum indy_vdr::common::error::VdrErrorKind\">VdrErrorKind</a>","synthetic":false,"types":["indy_vdr::common::error::VdrErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"indy_vdr/common/error/enum.VdrErrorKind.html\" title=\"enum indy_vdr::common::error::VdrErrorKind\">VdrErrorKind</a>&gt; for <a class=\"struct\" href=\"indy_vdr/common/error/struct.VdrError.html\" title=\"struct indy_vdr::common::error::VdrError\">VdrError</a>","synthetic":false,"types":["indy_vdr::common::error::VdrError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"indy_vdr/utils/validation/struct.ValidationError.html\" title=\"struct indy_vdr::utils::validation::ValidationError\">ValidationError</a>&gt; for <a class=\"struct\" href=\"indy_vdr/common/error/struct.VdrError.html\" title=\"struct indy_vdr::common::error::VdrError\">VdrError</a>","synthetic":false,"types":["indy_vdr::common::error::VdrError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"struct\" href=\"indy_vdr/common/error/struct.VdrError.html\" title=\"struct indy_vdr::common::error::VdrError\">VdrError</a>","synthetic":false,"types":["indy_vdr::common::error::VdrError"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"enum\" href=\"indy_vdr/common/error/enum.VdrErrorKind.html\" title=\"enum indy_vdr::common::error::VdrErrorKind\">VdrErrorKind</a>, M<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"indy_vdr/common/error/struct.VdrError.html\" title=\"struct indy_vdr::common::error::VdrError\">VdrError</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>","synthetic":false,"types":["indy_vdr::common::error::VdrError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/ledger/identifiers/cred_def/struct.CredentialDefinitionId.html\" title=\"struct indy_vdr::ledger::identifiers::cred_def::CredentialDefinitionId\">CredentialDefinitionId</a>","synthetic":false,"types":["indy_vdr::ledger::identifiers::cred_def::CredentialDefinitionId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/ledger/identifiers/rev_reg/struct.RevocationRegistryId.html\" title=\"struct indy_vdr::ledger::identifiers::rev_reg::RevocationRegistryId\">RevocationRegistryId</a>","synthetic":false,"types":["indy_vdr::ledger::identifiers::rev_reg::RevocationRegistryId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/ledger/identifiers/rich_schema/struct.RichSchemaId.html\" title=\"struct indy_vdr::ledger::identifiers::rich_schema::RichSchemaId\">RichSchemaId</a>","synthetic":false,"types":["indy_vdr::ledger::identifiers::rich_schema::RichSchemaId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"indy_vdr/ledger/identifiers/schema/struct.SchemaId.html\" title=\"struct indy_vdr::ledger::identifiers::schema::SchemaId\">SchemaId</a>","synthetic":false,"types":["indy_vdr::ledger::identifiers::schema::SchemaId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html\" title=\"struct std::collections::hash::map::RandomState\">RandomState</a>&gt;&gt; for <a class=\"struct\" href=\"indy_vdr/ledger/requests/schema/struct.AttributeNames.html\" title=\"struct indy_vdr::ledger::requests::schema::AttributeNames\">AttributeNames</a>","synthetic":false,"types":["indy_vdr::ledger::requests::schema::AttributeNames"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"indy_vdr/config/struct.PoolConfig.html\" title=\"struct indy_vdr::config::PoolConfig\">PoolConfig</a>&gt; for <a class=\"struct\" href=\"indy_vdr/pool/struct.PoolBuilder.html\" title=\"struct indy_vdr::pool::PoolBuilder\">PoolBuilder</a>","synthetic":false,"types":["indy_vdr::pool::builder::PoolBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"indy_vdr/pool/struct.PoolTransactions.html\" title=\"struct indy_vdr::pool::PoolTransactions\">PoolTransactions</a>","synthetic":false,"types":["indy_vdr::pool::genesis::PoolTransactions"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"indy_vdr/common/merkle_tree/struct.MerkleTree.html\" title=\"struct indy_vdr::common::merkle_tree::MerkleTree\">MerkleTree</a>&gt; for <a class=\"struct\" href=\"indy_vdr/pool/struct.PoolTransactions.html\" title=\"struct indy_vdr::pool::PoolTransactions\">PoolTransactions</a>","synthetic":false,"types":["indy_vdr::pool::genesis::PoolTransactions"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()